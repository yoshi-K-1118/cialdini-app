create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  is_premium boolean default false,
  stripe_customer_id text,
  monthly_usage integer default 0,
  usage_reset_at timestamp with time zone default now(),
  created_at timestamp with time zone default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Service role has full access" on public.profiles
  using (true) with check (true);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
