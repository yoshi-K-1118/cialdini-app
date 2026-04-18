// English version of principles data
export const principles = [
  {
    id: 'reciprocity',
    name: 'Reciprocity',
    subtitle: 'Reciprocity',
    emoji: '🎁',
    color: 'blue',
    description: 'When someone gives us something, we feel a strong obligation to give something back. By offering value first, you naturally create a desire in others to reciprocate.',
    mechanism: 'The norm of reciprocity is deeply ingrained as a social rule. Receiving an unsolicited favor creates a psychological sense of debt that people are driven to resolve.',
    caution: 'Overly calculated "giving with strings attached" can be seen through and backfire. Always prioritize sincerity in your actions.',
    scenarios: {
      business: {
        proposal: {
          tips: [
            'Help your boss with data gathering or research before making your proposal',
            'Regularly share information that helps your boss achieve their goals',
            'Proactively ask what problems your boss is facing and prepare solutions in advance',
          ],
          scripts: [
            '"I compiled that market data you mentioned the other day. While I\'m at it, would you have a moment to hear a proposal I\'d like to make?"',
            '"I thought through the challenge from last week on my own. Could I share what I came up with?"',
          ],
        },
        sales: {
          tips: [
            'Create and share a free analysis of the client\'s challenges before your pitch',
            'Send relevant industry reports or trend insights before getting to the main topic',
            'Offer a small trial, free consultation, or sample before making your ask',
          ],
          scripts: [
            '"I put together a report on trends in your industry. I thought it might be useful before we get into the main topic."',
            '"Please try our free trial first and see the results for yourself before making any decision."',
          ],
        },
        team: {
          tips: [
            'Invest in your team\'s growth (training, books, opportunities) before asking for their help',
            'Actively support your team\'s work and consistently show a spirit of contribution',
            'Reduce your team\'s workload on an ongoing basis before making difficult requests',
          ],
          scripts: [
            '"I\'d like to hand this project to you — I think it will also benefit your career. What do you think?"',
            '"You\'ve been working so hard, so I\'ll cover the seminar cost. In return, I\'d love to hear your feedback afterward."',
          ],
        },
        internal: {
          tips: [
            'Make it a habit to help other departments willingly, so you become known as a reliable collaborator',
            'Regularly share your department\'s knowledge and know-how with other teams',
            'Actively acknowledge and praise other departments\' successes',
          ],
          scripts: [
            '"I was glad to help out with that project last month. I also have a request from our side — would you be able to hear it?"',
            '"We\'ve been sharing information with each other for a while, so I\'d love if we could work on this together too."',
          ],
        },
        career: {
          tips: [
            'Build a track record of results exceeding expectations before salary negotiations',
            'Continuously offer suggestions and improvements that make your boss\'s job easier',
            'Follow up on work your boss values before entering a negotiation',
          ],
          scripts: [
            '"Over the past six months, I achieved [X] and supported the team in [Y]. With that in mind, I\'d like to discuss my compensation."',
            '"I believe I exceeded expectations on the recent project. Could we talk about my career path based on that?"',
          ],
        },
      },
      romance: {
        approach: {
          tips: [
            'Research their hobbies and interests in advance and share relevant info naturally',
            'Create a positive impression through mutual friends before you even meet',
            'Remember what they said in early conversations and bring it up later to show you care',
          ],
          scripts: [
            '"I heard you\'re into [topic], so I found this article — thought you might like it."',
            '"A mutual friend introduced us — I\'ve been looking forward to meeting you."',
          ],
        },
        date: {
          tips: [
            'Research their favorite food, places, and atmosphere in advance and plan accordingly',
            'Offer help before being asked when they seem tired or going through a tough time',
            'Remember things they mentioned and act on them next time to show sincerity',
          ],
          scripts: [
            '"You mentioned you liked that restaurant, so I went ahead and made a reservation. Want to go?"',
            '"You seemed busy lately, so I picked a place where we can relax. I didn\'t want to wear you out."',
          ],
        },
        confession: {
          tips: [
            'Build special shared memories before confessing to cultivate a sense of wanting to give back',
            'Fully support them when they\'re struggling, naturally creating a buildup of gratitude',
            'Consistently show actions that say "I do this for you" before expressing your feelings',
          ],
          scripts: [
            '"I\'ve been cheering you on all along — I want to be even closer to do that."',
            '"I\'m glad I was there for you the other day. I realized I want to stay by your side."',
          ],
        },
        maintain: {
          tips: [
            'Remember anniversaries and special dates, and make a habit of surprising them',
            'Proactively take care of small daily concerns before they even mention them',
            'Never take things for granted — always express gratitude in words',
          ],
          scripts: [
            '"You always cook, so today I\'ll take care of everything. Just relax."',
            '"You\'ve been so considerate even when you\'re busy. Thank you — I really appreciate you."',
          ],
        },
        reunion: {
          tips: [
            'Honestly reflect on what broke the relationship and show changed behavior proactively',
            'Show a willingness to give them what they need before asking for reconciliation',
            'Demonstrate change through concrete actions, not just words',
          ],
          scripts: [
            '"I know I didn\'t keep that promise. I want to prove I\'ve changed."',
            '"More than reconciling, I just want to get back to a place where we can talk again."',
          ],
        },
      },
      friendship: {
        newFriend: {
          tips: [
            'Share useful information or connections with them when you first meet',
            'Send something interesting related to their hobbies and say "thought you\'d like this"',
            'Invite them to activities first and give them a reason to want to meet again',
          ],
          scripts: [
            '"You mentioned you liked [topic] — here\'s a book I think you\'d enjoy."',
            '"We\'re all going out next time — would you like to join? I think you\'d have fun."',
          ],
        },
        deepen: {
          tips: [
            'Remember and celebrate their birthday or milestones with a surprise',
            'Acknowledge their efforts first and offer words of encouragement',
            'Make it a habit to do things they\'d enjoy before being asked',
          ],
          scripts: [
            '"Happy birthday! You\'ve done so much for me — it\'s just a small token of appreciation."',
            '"You\'ve been so busy lately. Is there anything I can help with? Don\'t hesitate to ask."',
          ],
        },
        group: {
          tips: [
            'Pay equal attention to everyone in the group and reach out first to anyone feeling left out',
            'Take the initiative in setting up gatherings and keeping the energy up',
            'Voluntarily take the role of sharing useful information or opportunities with the group',
          ],
          scripts: [
            '"I\'ll take care of organizing this one. I want everyone to have a great time."',
            '"I thought [person] would love this, so I\'m sharing the info with them too."',
          ],
        },
        support: {
          tips: [
            'Proactively reach out when a friend is struggling, before they ask',
            'Generously share your expertise, knowledge, and connections',
            'Checking in during tough times shows you\'re always there for them',
          ],
          scripts: [
            '"I heard you\'re job hunting. I know someone in that company — want me to connect you?"',
            '"If you need help moving, I\'ll be there. Just let me know the date and I\'ll keep it free."',
          ],
        },
        repair: {
          tips: [
            'If you\'ve been out of touch, honestly apologize first and share how you\'ve been',
            'Restart the relationship with something they\'d appreciate — a note or small gift',
            'Include a concrete proposal like "let\'s do something together" when reaching out',
          ],
          scripts: [
            '"Sorry for the silence. I saw this and immediately thought of you."',
            '"How have you been? I went to [place] recently and thought you\'d love it — so I reached out."',
          ],
        },
      },
      negotiation: {
        price: {
          tips: [
            'Research the other party\'s needs in advance and provide useful information before negotiating',
            'Make a small concession first to create an atmosphere of flexibility',
            'Start the negotiation on a friendly note with a "we go first" attitude',
          ],
          scripts: [
            '"We\'ve already revised our terms on our side. Could you take a look first?"',
            '"We reworked the plan based on your requests. Please have a look."',
          ],
        },
        persuade: {
          tips: [
            'Prepare and share information or analysis from the other party\'s perspective in advance',
            'Acknowledge their past statements and use them as the starting point for your proposal',
            'Structure your message to lead with the benefit to them',
          ],
          scripts: [
            '"I prepared some data in advance — could you take a moment to review it?"',
            '"I organized the key concerns you raised beforehand. Can we start from there?"',
          ],
        },
        request: {
          tips: [
            'Do something helpful for the other person before making a request',
            'Frame your ask in the context of "you\'ve always helped me, so..."',
            'Naturally remind them of times you\'ve given first, then make your request',
          ],
          scripts: [
            '"I\'m glad the materials I put together were useful. Actually, I have a small ask..."',
            '"You\'ve always been someone I can count on — would it be okay to ask you one thing?"',
          ],
        },
        conflict: {
          tips: [
            'When a complaint arises, lead with an apology and an offer of remedy right away',
            'Approach the situation by presenting solutions before explanations',
            'Take actions to reduce the other party\'s stress as a first step',
          ],
          scripts: [
            '"First, I sincerely apologize. Let me immediately propose how we\'ll address this."',
            '"Let me start by presenting what we can do. Then I\'ll explain what happened."',
          ],
        },
        daily: {
          tips: [
            'Build up small acts of consideration for family or close ones on a daily basis',
            'Do something they\'d appreciate before making a request of them',
            'Foster a spirit of mutual give-and-take to build trust over time',
          ],
          scripts: [
            '"You always cook, so tonight I\'ll handle cleanup. Just relax."',
            '"You helped me last week, so this time I\'ll take care of [X]. Just ask anytime."',
          ],
        },
      },
    },
  },
  {
    id: 'commitment',
    name: 'Commitment & Consistency',
    subtitle: 'Commitment & Consistency',
    emoji: '📌',
    color: 'violet',
    description: 'Once people commit to something, they strive to act consistently with that commitment. The foot-in-the-door technique — building up small "yeses" — makes it easier to eventually gain agreement on larger requests.',
    mechanism: 'The desire to maintain a consistent self-image drives this principle. Once someone declares "I am this kind of person," they find it difficult to act against that identity.',
    caution: 'Using low-ball tactics or deception to extract commitments raises serious ethical issues. Always seek commitments that are truthful and genuine from the start.',
    scenarios: {
      business: {
        proposal: {
          tips: [
            'Secure small cooperation (data review, quick feedback) from your boss before the main proposal',
            'Anchor your proposal in your boss\'s previous statements and policies',
            'Involve them gradually, building up small agreements before the full pitch',
          ],
          scripts: [
            '"You mentioned wanting to move in the direction of [X] before. This proposal is a direct extension of that."',
            '"Could you just review the outline for now? I\'ll refine the details based on your feedback."',
          ],
        },
        sales: {
          tips: [
            'Start with a small yes — a free demo, a document review, or a brief meeting',
            'Record the client\'s past statements and use them in your proposal',
            'Guide them progressively from a small trial to a full contract',
          ],
          scripts: [
            '"Could you spare just 15 minutes to see a quick demo? That\'s enough to decide."',
            '"You mentioned \'cost reduction is the top priority\' before — this proposal addresses that directly."',
          ],
        },
        team: {
          tips: [
            'Let team members set their own goals rather than imposing them from above',
            'Have the team co-create behavioral norms and share ownership',
            'Praise small wins to build a cycle of growing self-efficacy',
          ],
          scripts: [
            '"Please set your own goals for this month. I\'ll support you in achieving them."',
            '"You said you\'d give it a try in last week\'s meeting — how has that been going?"',
          ],
        },
        internal: {
          tips: [
            'Obtain small agreements from stakeholders individually before the meeting',
            'Document agreements via email to make commitments visible',
            'Gradually involve stakeholders and build established facts step by step',
          ],
          scripts: [
            '"When I checked in individually earlier, everyone was broadly on board. Today I\'d like to nail down the details."',
            '"Based on the direction confirmed in last week\'s email, I\'d like to move to the next step today."',
          ],
        },
        career: {
          tips: [
            'Quote specific comments from past performance reviews and track your goal achievements',
            'Use what your boss previously said about your strengths in conversation',
            'Clarify the conditions for promotion in advance and show you\'ve met them',
          ],
          scripts: [
            '"In our review six months ago, you said my leadership was improving. I\'ve continued building on that since."',
            '"You mentioned before that you\'d consider a promotion if I achieved [X]. I believe I did that last month."',
          ],
        },
      },
      romance: {
        approach: {
          tips: [
            'Make small promises (meeting again, sending something) and always keep them to build trust',
            'Keep notes on what they say they like and follow through next time',
            'Start with brief, casual interactions and gradually increase time and frequency',
          ],
          scripts: [
            '"We said we\'d definitely go there — are you free next week?"',
            '"Could we grab coffee for just 30 minutes? No pressure."',
          ],
        },
        date: {
          tips: [
            'Create small future promises within the date ("let\'s do this next time")',
            'Note down things they say they want to try and create opportunities to make them happen',
            'End dates in a way that naturally leads to a "next time"',
          ],
          scripts: [
            '"I want to come back here again. Let\'s do it when the season changes."',
            '"You mentioned wanting to go there — let\'s find a time that works."',
          ],
        },
        confession: {
          tips: [
            'Create small routines and habits of "being together" before confessing',
            'Build shared experiences that make them see your relationship as something special',
            'Gradually deepen the relationship to lower the barrier to "becoming a couple"',
          ],
          scripts: [
            '"I\'ve been wanting to be with you properly — can we make it official?"',
            '"I realized I think about you all the time. I want to face that honestly."',
          ],
        },
        maintain: {
          tips: [
            'Together decide on relationship rules and routines (weekly calls, monthly dates) and stick to them',
            'When you disagree, always reflect and decide together "how to handle it next time"',
            'Put "our agreements" into words as a shared commitment',
          ],
          scripts: [
            '"Let\'s keep having breakfast together on weekend mornings — I love that habit."',
            '"I could have said that better. Can we agree on how to handle it differently next time?"',
          ],
        },
        reunion: {
          tips: [
            'Show evidence of change rather than promising to change',
            'Start small with rebuilding the friendship, rather than jumping to reconciliation',
            'Honestly reflect on past promises and what you failed to keep',
          ],
          scripts: [
            '"I didn\'t keep the promise I made back then. I want to prove I\'ve changed."',
            '"More than getting back together, I just want to get back to being able to talk."',
          ],
        },
      },
      friendship: {
        newFriend: {
          tips: [
            'Right after meeting, make a concrete suggestion to meet again soon',
            'Send a message after meeting saying "that was fun" and suggest the next step',
            'Always keep small promises (sending info, introducing someone) to build trust',
          ],
          scripts: [
            '"That was great — let\'s grab drinks again soon!"',
            '"I\'ll send you that book we talked about. Let me know what you think."',
          ],
        },
        deepen: {
          tips: [
            'Always have a small future plan ("let\'s do that together again")',
            'Commit to supporting their goals by doing it alongside them',
            'Set a shared challenge or goal to keep you both involved',
          ],
          scripts: [
            '"Let\'s do another book club next month."',
            '"You mentioned the gym — want to start together? It\'ll be easier to stick with it."',
          ],
        },
        group: {
          tips: [
            'Frame group plans as "decided by everyone" to strengthen the sense of participation',
            'Tell absent members "it\'s different when you\'re here" to give them a reason to come',
            'Create group rules and traditions together so everyone feels involved',
          ],
          scripts: [
            '"We all decided on this, so I really hope you can make it."',
            '"The whole vibe changes when you\'re there. Looking forward to next month too."',
          ],
        },
        support: {
          tips: [
            'When asked for help, make a specific commitment rather than vague "anytime"',
            'Always follow through on past promises to help',
            'Show up in action during a friend\'s difficult time',
          ],
          scripts: [
            '"Not just \'let me know\' — I\'m free Thursday, so let\'s think it through together."',
            '"I said I\'d be there for you. Now\'s the time. Tell me everything."',
          ],
        },
        repair: {
          tips: [
            'If there was a reason for drifting apart, address it honestly and show you want to reconnect',
            'Reference a past good memory or shared promise to re-open the relationship',
            'Start with a small re-engagement (sending a message, reaching out on an anniversary)',
          ],
          scripts: [
            '"We said we\'d get drinks someday — I want to finally make that happen."',
            '"I never properly apologized for what happened. I\'ve been thinking about it ever since. Can we talk?"',
          ],
        },
      },
      negotiation: {
        price: {
          tips: [
            'Start by confirming small points of agreement (timeline, scope) and build toward larger items',
            'Quote the other party\'s past statements ("cost reduction is key") to show alignment',
            'Document agreed items so they form the basis for future discussions',
          ],
          scripts: [
            '"Let\'s align on the basic terms first. We can refine the numbers in the next step."',
            '"We came in with pricing based on the budget range you mentioned before."',
          ],
        },
        persuade: {
          tips: [
            'Quote the other party\'s previously stated values and emphasize how your proposal aligns',
            'Start the conversation from "something you said before" to anchor continuity',
            'Build up small yeses before introducing the core ask',
          ],
          scripts: [
            '"Your proposal aligns with the value of [X] that you\'ve always emphasized."',
            '"Based on the direction you endorsed in our last meeting, I\'d like to make one specific request."',
          ],
        },
        request: {
          tips: [
            'Confirm past approvals as established facts before making a new request',
            'Start with a "small trial" and transition gradually to the main ask',
            'Frame the request in a way that lets them see themselves as "someone who helps"',
          ],
          scripts: [
            '"You helped me with something similar before. I\'d like to discuss a comparable situation."',
            '"Could you try it just once? That\'s enough to judge whether it\'s right for you."',
          ],
        },
        conflict: {
          tips: [
            'When conflict arises, first confirm the facts together and build shared agreements',
            'Reference the positive history between you to show motivation for resolution',
            'Establish a "we solve this together" stance from the start',
          ],
          scripts: [
            '"Let\'s first confirm what happened factually. Then we can work out a solution together."',
            '"We\'ve had a long relationship and I\'m confident we can find a resolution everyone is happy with."',
          ],
        },
        daily: {
          tips: [
            'Jointly create and stick to household rules and agreements with family or a partner',
            'Build up small acts of giving before making requests',
            'Show consistency in your daily actions so people know what to expect from you',
          ],
          scripts: [
            '"That\'s the rule we decided on together. Can you follow it today too?"',
            '"You always do [X], so can I ask you to do [Y] today?"',
          ],
        },
      },
    },
  },
  {
    id: 'social-proof',
    name: 'Social Proof',
    subtitle: 'Social Proof',
    emoji: '👥',
    color: 'emerald',
    description: 'In uncertain situations, people look to the behavior of others to determine the right course of action. Knowing that "many people are doing this" or "everyone says so" is a powerful driver of behavior.',
    mechanism: 'To reduce the cognitive cost of decision-making under uncertainty, people use the behavior of others as a shortcut. Especially effective when the reference group is perceived as similar to oneself.',
    caution: 'Fabricating data or using fake reviews can lead to legal and ethical problems. Use only real case studies and authentic testimonials.',
    scenarios: {
      business: {
        proposal: {
          tips: [
            'Present success stories from other companies or departments with specific data',
            'Quote the names and opinions of colleagues who are already on board',
            'Show that this is an industry trend with facts like "many companies are already doing this"',
          ],
          scripts: [
            '"A competitor achieved a 15% revenue increase with this approach. We can expect similar results."',
            '"I also consulted with [senior manager] and they said they\'d like to see this move forward."',
          ],
        },
        sales: {
          tips: [
            'Present concrete metrics: number of clients, satisfaction scores, retention rates',
            'Focus on case studies from companies of similar size and industry',
            'Actively use customer testimonials, reviews, and case interviews',
          ],
          scripts: [
            '"Over 50 companies in this industry have adopted our solution, with a 97% satisfaction rate."',
            '"Here\'s a case study from [company], similar in size to yours — they saw a 2.3x ROI in 6 months."',
          ],
        },
        team: {
          tips: [
            'Share standout team members\' behaviors and outcomes as role models',
            'Share facts like "most of the team is already doing X" to encourage adoption',
            'Reduce resistance to change by sharing external success stories in workshops',
          ],
          scripts: [
            '"Since [colleague] started using this method, their processing speed went up 30%. I want everyone to try it."',
            '"Other teams hit the same challenge and solved it this way — let\'s do the same."',
          ],
        },
        internal: {
          tips: [
            'Gather supporters in advance and say "X and Y departments are also in favor" in meetings',
            'Quote comments from executives or influential figures',
            'Position the proposal as "proven" by referencing prior success in other departments',
          ],
          scripts: [
            '"I\'ve consulted with both the sales and engineering departments, and both are supportive."',
            '"Senior leadership has also shown interest and believes this is worth pursuing."',
          ],
        },
        career: {
          tips: [
            'Objectively present market compensation data for your role and experience level',
            'Reference the compensation of peers at a similar level (within factual bounds)',
            'Indirectly mention outside offers or recognition if they exist',
          ],
          scripts: [
            '"According to an industry salary survey, the median compensation for my role and experience is [X]."',
            '"I\'ve received some interest from outside as well. To continue contributing here, I\'d like to discuss my compensation."',
          ],
        },
      },
      romance: {
        approach: {
          tips: [
            'Let mutual friends naturally convey that you\'re "a good person" without engineering it',
            'Naturally show your social life and how well-liked you are through your network',
            'Make your presence felt in groups or places the other person finds interesting',
          ],
          scripts: [
            '"A mutual friend said we\'d get along, so I wanted to reach out."',
            '"That event is always fun and I have a lot of friends there — want to join sometime?"',
          ],
        },
        date: {
          tips: [
            'Invite them to a trending spot that "everyone is talking about" to show your good taste',
            'Use places that mutual friends have recommended highly',
            'Casually mention during the date that "my friends all love this place"',
          ],
          scripts: [
            '"All my friends have been raving about this place — want to check it out?"',
            '"This spot has been really popular lately, and [friend] loved it too. What do you think?"',
          ],
        },
        confession: {
          tips: [
            'Naturally let it be known through mutual friends that you\'re interested in them',
            'Get positive impressions from people around them ("they seem great for you")',
            'Create an atmosphere where "everyone is rooting for you two"',
          ],
          scripts: [
            '"Our mutual friends actually say we\'d be a good match too. I think so too."',
            '"I\'m confident enough in my feelings to tell everyone — that\'s how I know it\'s real."',
          ],
        },
        maintain: {
          tips: [
            'Naturally show your relationship as a "great couple" to those around you to strengthen the bond',
            'Be conscious of making positive impressions on each other\'s friends and family',
            'Look to habits of long-lasting couples for inspiration to incorporate into your relationship',
          ],
          scripts: [
            '"Friends told us we seem really close. That made me happy."',
            '"I heard that lasting couples go on a date every week. Should we try that?"',
          ],
        },
        reunion: {
          tips: [
            'Let it naturally reach them through mutual friends that you\'ve "really changed"',
            'Show your growth and change through your social reputation and actions',
            'Create an atmosphere through shared friends of "maybe give it another chance"',
          ],
          scripts: [
            '"[Friend] mentioned you\'ve really been working hard lately. That sounded just like you, so I had to reach out."',
            '"Some mutual friends suggested I reach out. I took the leap."',
          ],
        },
      },
      friendship: {
        newFriend: {
          tips: [
            'Get introduced through a mutual friend to establish trust in advance',
            'Take them to events or places that many people enjoy',
            'Naturally show that you have a great social circle',
          ],
          scripts: [
            '"There\'s someone in [friend]\'s circle who everyone trusts and loves — I\'d like to introduce you."',
            '"This group is full of great people — you should come along sometime."',
          ],
        },
        deepen: {
          tips: [
            'Tell them that other friends also really like them',
            'Naturally weave in what mutual friends have said about them in conversation',
            'Use the fact that "everyone likes you" to deepen the bond',
          ],
          scripts: [
            '"[Friend] and [friend] were both saying how great you are — I agree completely."',
            '"Everyone in this group likes you so much. You really brighten the atmosphere."',
          ],
        },
        group: {
          tips: [
            'Convey "everyone is looking forward to this" to encourage participation',
            'Spread group norms naturally as "something everyone does"',
            'Intentionally share what influential members are saying or doing',
          ],
          scripts: [
            '"[Friend] and [friend] are both coming, so I really hope you can make it."',
            '"Everyone in the group has been into this lately — you should try it!"',
          ],
        },
        support: {
          tips: [
            'Let them know "it\'s not just me — everyone is worried about you"',
            'Share how other friends navigated similar situations successfully',
            'Use the power of "if everyone says so" to encourage action',
          ],
          scripts: [
            '"It\'s not just me — [friend] and [friend] are both worried too. Don\'t carry it alone."',
            '"[Friend] went through the same thing and it worked out with this approach. Give it a try?"',
          ],
        },
        repair: {
          tips: [
            'Have mutual friends convey that you\'ve been thinking of them',
            'Set up a group reunion to create a natural reconnection',
            'Convey the fact that "everyone has been wanting to see you"',
          ],
          scripts: [
            '"Everyone has been talking about you lately. Want to all get together again?"',
            '"[Friend] and [friend] both said they want to hang out again — I\'ll let you know when we plan something."',
          ],
        },
      },
      negotiation: {
        price: {
          tips: [
            'Present specific data showing other companies that agreed to similar terms',
            'Provide third-party market price research data',
            'Show that your terms are competitive using a comparison',
          ],
          scripts: [
            '"More than 10 companies of similar size have agreed to these terms."',
            '"Market research confirms this price range is the industry median."',
          ],
        },
        persuade: {
          tips: [
            'Quote endorsements from recognized experts or industry leaders',
            'Present multiple case studies from similar industries',
            'Gather supporters in advance to show that you represent the majority view',
          ],
          scripts: [
            '"Many experts in this field recommend this approach."',
            '"80% of companies that tried this first have seen results."',
          ],
        },
        request: {
          tips: [
            'Naturally mention examples of others who have accepted the same request',
            'Frame it as a normal, common request that many people make',
            'Mention that a trusted third party has also agreed',
          ],
          scripts: [
            '"[Colleague] and [colleague] handled it the same way and it worked out well."',
            '"This is something I often ask of people, and everyone has been very gracious about it."',
          ],
        },
        conflict: {
          tips: [
            'Present past cases where similar complaints were resolved to show it can be handled',
            'Frame your response as the industry-standard approach',
            'Show third-party certifications or ratings to back up your credibility',
          ],
          scripts: [
            '"In similar cases, we\'ve resolved the issue this way."',
            '"This response is based on industry association guidelines — here\'s what we propose."',
          ],
        },
        daily: {
          tips: [
            'Frame household habits or requests as "something the whole family does"',
            'Reference successful experiences of those close to you to encourage action',
            'Use nearby social proof like "our neighbors started doing this too"',
          ],
          scripts: [
            '"Everyone in the family does it this way — give it a try."',
            '"I heard [neighbor] started doing this too. Let\'s try it at home."',
          ],
        },
      },
    },
  },
  {
    id: 'authority',
    name: 'Authority',
    subtitle: 'Authority',
    emoji: '🏆',
    color: 'amber',
    description: 'People tend to trust and follow the opinions of those with expertise or recognized credentials. Presenting relevant qualifications and a track record dramatically increases the persuasiveness of your message.',
    mechanism: 'Evolutionarily, following the judgment of experienced individuals was advantageous for survival, making deference to authority instinctive. Even symbolic markers of authority (titles, uniforms, credentials) are effective.',
    caution: 'Presenting false credentials or exaggerating achievements constitutes fraud. Use only your genuine expertise and real accomplishments.',
    scenarios: {
      business: {
        proposal: {
          tips: [
            'Cite data from external experts or research institutions as evidence',
            'Include credibility signals (awards, certifications, publications) in your proposal',
            'Get opinions from senior figures or respected colleagues in advance, and quote them',
          ],
          scripts: [
            '"A report from [research firm] confirms the effectiveness of this approach."',
            '"I spoke with the VP last week about this direction and they said it\'s worth exploring."',
          ],
        },
        sales: {
          tips: [
            'Bring technical experts or senior staff to reinforce authority in meetings',
            'List certifications, awards, and media coverage at the start of your materials',
            'Show logos of well-known client companies as proof of credibility',
          ],
          scripts: [
            '"Our CTO is joining us today to walk you through the technical details."',
            '"We are government-certified and have won the [X] Award for excellence."',
          ],
        },
        team: {
          tips: [
            'Bring in external trainers or expert speakers to provide authority beyond your own',
            'Appropriately share your own experience and track record to strengthen trust in your guidance',
            'Support directives and policies with industry data and research',
          ],
          scripts: [
            '"McKinsey research shows this method improves productivity by 40%. Let\'s try it."',
            '"When I implemented this at my previous company, team turnover dropped by half. That\'s why I want us to do it."',
          ],
        },
        internal: {
          tips: [
            'Clearly show how your proposal aligns with the company\'s strategy and long-term plan',
            'Use external consultants or experts to back your recommendation',
            'Secure support from department heads or executives beforehand',
          ],
          scripts: [
            '"This proposal directly contributes to achieving [X] outlined in our mid-term plan."',
            '"We\'ve also had an external consultant review this and they confirm it\'s the best approach."',
          ],
        },
        career: {
          tips: [
            'Present external data on your market value (salary surveys, job market data)',
            'Show external recognition: speaking engagements, publications, awards',
            'Mention that senior leaders within the company have recognized your work',
          ],
          scripts: [
            '"I recently had the opportunity to speak at an industry conference and received positive external recognition. With that in mind, I\'d like to discuss my role."',
            '"[Senior manager] also gave me positive feedback recently. I\'d like to discuss my compensation based on both internal and external recognition."',
          ],
        },
      },
      romance: {
        approach: {
          tips: [
            'Naturally convey your area of expertise or skill in conversation (without bragging)',
            'Offer trustworthy advice or information in a domain they care about',
            'Show the depth of your hobbies, knowledge, and experience through actual actions',
          ],
          scripts: [
            '"I\'m really into cooking and do it at a somewhat serious level — let me cook for you sometime."',
            '"I\'ve studied that topic a lot — feel free to ask me anything."',
          ],
        },
        date: {
          tips: [
            'Plan the date with confidence and show a "trust me" attitude',
            'Naturally demonstrate deep knowledge about topics they\'re interested in',
            'Show a high quality of life through how you choose restaurants and carry yourself',
          ],
          scripts: [
            '"This is a hidden gem restaurant. I know it well — trust me, you\'ll love it."',
            '"I know a bit about wine — I\'ll pick something that matches your taste."',
          ],
        },
        confession: {
          tips: [
            'Show before confessing that you observe them more closely than anyone else',
            'Demonstrate the ability to articulate their strengths and talents in specific terms',
            'Convey your feelings with conviction and certainty',
          ],
          scripts: [
            '"I\'ve watched you more closely than anyone. That\'s why I can say this with confidence."',
            '"As someone who truly sees your value, I want to be honest with you."',
          ],
        },
        maintain: {
          tips: [
            'Offer specific advice and solutions when your partner is struggling',
            'Have a clear vision for the future of your relationship and communicate it clearly',
            'Take the lead with "let\'s do this" when relationship challenges come up',
          ],
          scripts: [
            '"About that concern — here\'s my take. From experience, I think this approach will work."',
            '"I have a vision for our future I\'d like to share with you."',
          ],
        },
        reunion: {
          tips: [
            'Show evidence of change through specific results and accomplishments, not just words',
            'Present proof that you\'ve resolved the issue that caused the separation',
            'Convey a deep understanding of what they went through',
          ],
          scripts: [
            '"I analyzed what I was doing wrong back then and worked to change it. Can I tell you about it?"',
            '"I truly understand now why you left. With that clarity, I want to talk again."',
          ],
        },
      },
      friendship: {
        newFriend: {
          tips: [
            'Actively offer information and advice in your area of expertise',
            'Establish yourself as the "go-to person" for a specific topic in your community',
            'Show a generous attitude of sharing your network, knowledge, and experience',
          ],
          scripts: [
            '"I know that area well — ask me anything."',
            '"I can connect you with someone who knows that person well — want an introduction?"',
          ],
        },
        deepen: {
          tips: [
            'Give substantive, meaningful advice when a friend brings up problems — not just surface-level responses',
            'Freely share lessons learned from your own experiences and failures',
            'Become the person they think of first when they need a real answer',
          ],
          scripts: [
            '"I\'ve been through something similar. Here\'s what worked for me — hope it\'s useful."',
            '"I know a bit about that — want to think it through together?"',
          ],
        },
        group: {
          tips: [
            'Become recognized as the "expert" for a specific domain within the group',
            'Consistently bring useful information or opportunities to the group',
            'Become the person with the knowledge and network to solve problems',
          ],
          scripts: [
            '"For that, you should talk to this person — they\'re the most knowledgeable one I know."',
            '"I\'m the most up-to-date on [topic] in this group, so always feel free to ask."',
          ],
        },
        support: {
          tips: [
            'Give concrete, experience-based suggestions when a friend is struggling',
            'Refer them to the right professional when specialized support is needed',
            'Follow through and deliver results in areas where you said "leave it to me"',
          ],
          scripts: [
            '"Tell me more about it — I have experience with this. Let\'s figure out a solution together."',
            '"I have a friend who\'s an expert in that — want me to introduce you? They\'ll really help."',
          ],
        },
        repair: {
          tips: [
            'Honestly share your analysis of why you drifted apart',
            'Offer a concrete proposal for repairing the relationship with a "this is the best way" framing',
            'Show through actions and achievements that you have changed',
          ],
          scripts: [
            '"I\'ve thought about what happened between us. I think I also had a part in it."',
            '"I genuinely want to reconnect. I\'d like to start this way — would that work for you?"',
          ],
        },
      },
      negotiation: {
        price: {
          tips: [
            'Actively quote data from leading experts or industry associations',
            'Explain why the price is fair from a technical or specialist perspective',
            'Use certifications, credentials, and track record as negotiating assets',
          ],
          scripts: [
            '"Industry association data confirms this price range is the standard."',
            '"Our specialist engineers assess this specification to be fairly priced at this level."',
          ],
        },
        persuade: {
          tips: [
            'Present an authoritative third party\'s opinion or data before making your own case',
            'Preface your opinion with your credentials and experience',
            'Make your proposal from the stance of "as a specialist"',
          ],
          scripts: [
            '"As someone with 10 years of experience in this field, I can say with confidence that..."',
            '"According to our certified specialist team\'s analysis, this is the recommended approach."',
          ],
        },
        request: {
          tips: [
            'Reference an expert or authoritative figure\'s opinion to support your request',
            'Explain that this is the standard practice in the industry',
            'Cite relevant credentials or institutional backing for your ask',
          ],
          scripts: [
            '"Leading experts in this field recommend this approach, which is why I\'m proposing it."',
            '"This aligns with the standard set by [industry body], so I\'m confident it\'s the right call."',
          ],
        },
        conflict: {
          tips: [
            'Reference objective standards or certifications to show your response is legitimate',
            'Call in a neutral expert or mediator if needed to restore credibility',
            'Back your resolution proposal with documented best practices',
          ],
          scripts: [
            '"Our process is certified by [body] and aligns with industry best practices."',
            '"I\'d suggest we bring in a neutral third party to help resolve this fairly."',
          ],
        },
        daily: {
          tips: [
            'Reference an expert\'s advice (doctor, professional) to encourage family members',
            'Cite credible sources when discussing healthy habits or important decisions',
            'Show your own track record as the basis for your recommendations',
          ],
          scripts: [
            '"Our doctor actually recommended this approach — maybe we should give it a try."',
            '"I\'ve been doing this for a while now and it\'s made a real difference. Trust me on this one."',
          ],
        },
      },
    },
  },
  {
    id: 'liking',
    name: 'Liking',
    subtitle: 'Liking',
    emoji: '💛',
    color: 'pink',
    description: 'People are more likely to say yes to requests from someone they like. Similarity, genuine compliments, and increased contact are the main factors that generate liking.',
    mechanism: 'Liking functions as a cognitive heuristic: "someone I like = someone I can trust." Discovering common ground, receiving a sincere compliment, and frequent positive interactions all build this effect.',
    caution: 'Excessive flattery or fabricated similarities will be seen through and destroy trust. Prioritize genuine interest and sincere compliments.',
    scenarios: {
      business: {
        proposal: {
          tips: [
            'Find genuine common ground with your boss before making your proposal',
            'Sincerely acknowledge your boss\'s past achievements and leadership',
            'Show that your proposal aligns with your boss\'s values and vision',
          ],
          scripts: [
            '"I\'ve always respected how you handle [X] — this proposal reflects that same approach."',
            '"I know you care deeply about [value], and this idea builds directly on that."',
          ],
        },
        sales: {
          tips: [
            'Research the client\'s interests, hobbies, and background in advance',
            'Find genuine common ground — hometown, alma mater, interests — and bring it into the conversation',
            'Give specific, sincere compliments about their company and work',
          ],
          scripts: [
            '"I noticed you went to [university] — I\'m also from that area. Small world!"',
            '"Your company\'s commitment to [value] really stands out in the industry. I genuinely admire it."',
          ],
        },
        team: {
          tips: [
            'Show a genuine interest in each team member\'s personal goals and background',
            'Give sincere, specific praise — not generic compliments',
            'Create opportunities to connect through casual conversation and shared experiences',
          ],
          scripts: [
            '"I know [X] is important to you. How is that going outside of work?"',
            '"The way you handled [situation] was really impressive — you made the whole team better."',
          ],
        },
        internal: {
          tips: [
            'Build friendly relationships with other departments through casual conversation and lunches',
            'Genuinely acknowledge other departments\' efforts and contributions',
            'Show sincere interest in other teams\' goals',
          ],
          scripts: [
            '"I heard your team absolutely nailed that project. That was impressive — really well done."',
            '"I\'d love to hear more about what your team is working on. Could we grab coffee sometime?"',
          ],
        },
        career: {
          tips: [
            'Share genuine gratitude for your boss\'s guidance and support',
            'Show sincere alignment with the company\'s mission and values',
            'Build mutual trust through regular honest communication',
          ],
          scripts: [
            '"I\'ve learned so much from your feedback over the past year — I\'m genuinely grateful."',
            '"I feel a strong alignment with the direction this company is heading, and I want to grow with it."',
          ],
        },
      },
      romance: {
        approach: {
          tips: [
            'Genuinely find and highlight common interests, values, or experiences',
            'Give specific, sincere compliments — not generic ones',
            'Increase positive contact through casual, low-pressure interactions',
          ],
          scripts: [
            '"You\'re into [topic] too? I never meet people who are into that — it\'s rare."',
            '"That thing you said about [X] the other day really stuck with me. You have such an interesting perspective."',
          ],
        },
        date: {
          tips: [
            'Create shared laughter and lighthearted moments on the date',
            'Show genuine curiosity about their life, values, and experiences',
            'Mirror their energy and communication style naturally',
          ],
          scripts: [
            '"I feel like we could talk for hours — the time just flies when we\'re together."',
            '"What made you get into [interest]? I\'d love to hear the full story."',
          ],
        },
        confession: {
          tips: [
            'Be specific about what you like about them — generic confessions are less persuasive',
            'Reference shared memories and experiences when expressing your feelings',
            'Be genuine and vulnerable — authenticity creates connection',
          ],
          scripts: [
            '"There are a lot of things I love about you, but what gets me most is the way you [specific trait]."',
            '"Since [specific moment], I haven\'t been able to stop thinking about you."',
          ],
        },
        maintain: {
          tips: [
            'Keep discovering new things about your partner — show ongoing genuine curiosity',
            'Express appreciation and admiration regularly in specific, meaningful ways',
            'Create new shared experiences to keep building common ground',
          ],
          scripts: [
            '"I feel like I learn something new about you every day. That\'s one of my favorite things about us."',
            '"I was thinking about [specific thing they did] and it made me realize again how lucky I am."',
          ],
        },
        reunion: {
          tips: [
            'Reconnect around genuine shared memories and past positive moments',
            'Show that you\'ve grown in ways they always hoped you would',
            'Be honest and vulnerable — don\'t try to impress, just connect',
          ],
          scripts: [
            '"I\'ve been thinking about [specific memory] a lot lately. It still makes me smile."',
            '"I know I wasn\'t what you needed then. I think I understand better now — and I genuinely miss who we were together."',
          ],
        },
      },
      friendship: {
        newFriend: {
          tips: [
            'Actively look for genuine common ground and build on it',
            'Give sincere, specific compliments on something you truly noticed',
            'Show warmth and genuine interest in who they are',
          ],
          scripts: [
            '"You\'re into [hobby]? That\'s one of my favorite things — we have to talk more about that."',
            '"You have a really interesting way of looking at things — I love that."',
          ],
        },
        deepen: {
          tips: [
            'Celebrate their wins enthusiastically — genuine joy for others is deeply likeable',
            'Share your own vulnerabilities to invite reciprocal openness',
            'Create inside jokes and shared references that only exist between you two',
          ],
          scripts: [
            '"I\'m so genuinely happy for you — you worked so hard for this."',
            '"Can I be honest with you? I\'ve been struggling with something and I wanted to talk to you about it."',
          ],
        },
        group: {
          tips: [
            'Make every person in the group feel seen and valued',
            'Be the person who connects people and facilitates great conversations',
            'Show genuine enthusiasm for whatever the group is into',
          ],
          scripts: [
            '"You two should really talk — you have so much in common, I bet you\'d hit it off."',
            '"I\'ve been looking forward to this all week — you guys always make it so much fun."',
          ],
        },
        support: {
          tips: [
            'Be fully present when they need you — put your phone away and just listen',
            'Offer support in their love language, not just yours',
            'Follow up after hard conversations to show you were truly paying attention',
          ],
          scripts: [
            '"I\'m here. Tell me everything — I\'m not going anywhere."',
            '"I\'ve been thinking about what you shared with me. How are you doing with it now?"',
          ],
        },
        repair: {
          tips: [
            'Lead with warmth and genuine affection when re-opening contact',
            'Reference a positive shared memory to re-establish connection',
            'Show that you genuinely missed them — not just what they provided for you',
          ],
          scripts: [
            '"I was just thinking about [shared memory] and I realized how much I miss just being around you."',
            '"I know things got weird between us, but the truth is you\'re one of the people I care about most."',
          ],
        },
      },
      negotiation: {
        price: {
          tips: [
            'Build rapport before getting into numbers — people negotiate better with people they like',
            'Find common ground in values or goals before presenting terms',
            'Maintain a warm, collaborative tone even when the discussion gets difficult',
          ],
          scripts: [
            '"I want us to find something that genuinely works for both sides here."',
            '"I appreciate how straightforward you\'ve been — let me be equally direct with you."',
          ],
        },
        persuade: {
          tips: [
            'Acknowledge the other side\'s perspective genuinely before presenting yours',
            'Find the shared goal that underlies both positions and build from there',
            'Be likeable even in disagreement — stay warm and curious rather than defensive',
          ],
          scripts: [
            '"I hear where you\'re coming from, and I think we actually want the same outcome here."',
            '"What\'s the most important thing to you in this? I want to make sure we address that."',
          ],
        },
        request: {
          tips: [
            'Make the ask from a place of genuine relationship, not transactional need',
            'Frame the request as something you\'d be asking of a trusted ally, not just anyone',
            'Express sincere appreciation regardless of the outcome',
          ],
          scripts: [
            '"You\'re one of the few people I trust with something like this — that\'s why I\'m coming to you."',
            '"I really appreciate you even taking the time to consider this."',
          ],
        },
        conflict: {
          tips: [
            'De-escalate with warmth and empathy before any logical argument',
            'Express genuine understanding of their frustration',
            'Re-establish positive rapport before trying to resolve the issue',
          ],
          scripts: [
            '"I can completely understand why you\'re frustrated — and I want to make this right."',
            '"Let\'s step back from the specifics for a moment. I value this relationship and I want to fix this."',
          ],
        },
        daily: {
          tips: [
            'Make requests from a place of warmth, not pressure',
            'Express appreciation generously and specifically for things people do',
            'Keep interactions light and pleasant to maintain positive relational energy',
          ],
          scripts: [
            '"Would you mind helping me with [X]? I really appreciate everything you do."',
            '"You always make this feel so easy — thank you for that."',
          ],
        },
      },
    },
  },
  {
    id: 'scarcity',
    name: 'Scarcity',
    subtitle: 'Scarcity',
    emoji: '⏰',
    color: 'rose',
    description: 'Things that are rare or at risk of being lost feel more valuable. Information like "limited edition," "almost sold out," or "offer expires soon" drives people\'s decisions and spurs action.',
    mechanism: 'Loss aversion bias (we feel losses more acutely than equivalent gains) and psychological reactance (resistance when freedom is being taken away) both power this principle. The possibility of losing access makes something feel precious.',
    caution: 'Fake scarcity (claiming "almost sold out" when stock is plentiful) is potentially illegal and always unethical. Only communicate genuine scarcity.',
    scenarios: {
      business: {
        proposal: {
          tips: [
            'Communicate urgency: "if we don\'t move forward now, the opportunity will close"',
            'Show that competitor companies are already acting and the window is narrowing',
            'Present timing constraints from the market or business environment',
          ],
          scripts: [
            '"Several competitors are already moving on this. If we wait, we\'ll miss the window."',
            '"This opportunity won\'t be available indefinitely — I\'d like to make a decision this quarter."',
          ],
        },
        sales: {
          tips: [
            'Communicate genuine capacity limits: "we can only take on X new clients this quarter"',
            'Set a clear deadline and stick to it — extend it and you lose credibility',
            'Share accurate stock or availability information to create natural urgency',
          ],
          scripts: [
            '"We\'re only onboarding [X] new clients this quarter, and we have [Y] spots left."',
            '"This pricing is available until [date]. After that, we\'re moving to the new rate."',
          ],
        },
        team: {
          tips: [
            'Communicate budget or resource limitations clearly to focus the team\'s efforts',
            'Set clear deadlines for decisions and learning opportunities',
            'Show that windows for growth or opportunity have real time limits',
          ],
          scripts: [
            '"This training budget is only available for the next two months. Let\'s use it well."',
            '"We have a limited window to establish ourselves in this area — now is the time."',
          ],
        },
        internal: {
          tips: [
            'Highlight that the timing of your proposal is uniquely suited to current conditions',
            'Show that the opportunity to lead this initiative will not be available indefinitely',
            'Create urgency around budget cycles or strategic planning windows',
          ],
          scripts: [
            '"This aligns perfectly with where we are strategically right now — this window won\'t last."',
            '"If we don\'t move on this in this fiscal year, we\'ll have to wait another cycle."',
          ],
        },
        career: {
          tips: [
            'Mention genuine outside interest or offers to signal your market value',
            'Communicate that you\'re making a career decision on a specific timeline',
            'Be honest about competing opportunities without exaggerating them',
          ],
          scripts: [
            '"I\'ve received some interest from outside and I\'m evaluating my options. I\'d prefer to stay and grow here — which is why I wanted to have this conversation."',
            '"I\'d like to make a decision about my future by [date]. I\'m hoping we can reach an agreement before then."',
          ],
        },
      },
      romance: {
        approach: {
          tips: [
            'Don\'t always be immediately available — let genuine busyness create natural value',
            'Be selective and authentic in showing your time and interest as something worth having',
            'Share genuinely that you have other commitments or interests to avoid coming across as desperate',
          ],
          scripts: [
            '"I\'m pretty busy this month, but I\'d love to carve out some time to meet."',
            '"I don\'t say yes to many plans, but I\'d genuinely like to see you."',
          ],
        },
        date: {
          tips: [
            'Choose places or experiences that are genuinely limited or special',
            'Create moments within the date that feel rare and unique to just the two of you',
            'Let natural endings create a sense of wanting more',
          ],
          scripts: [
            '"This is a reservation I had to plan weeks ahead — I wanted it to be special."',
            '"I can\'t believe how fast the time went. I want to do this again."',
          ],
        },
        confession: {
          tips: [
            'Let your feelings be known with a sense that "this moment won\'t come again"',
            'Be genuine about the fact that you don\'t open up to just anyone',
            'Confess with quiet confidence — not desperation',
          ],
          scripts: [
            '"I don\'t say things like this lightly, and I don\'t say them often. But I feel this deeply."',
            '"I\'ve been waiting for the right moment, and I realized there\'s no such thing — so I\'m telling you now."',
          ],
        },
        maintain: {
          tips: [
            'Keep cultivating your own life, interests, and growth outside the relationship',
            'Create occasional special moments that break from routine',
            'Remind each other that this relationship is something to actively choose and protect',
          ],
          scripts: [
            '"I love that we both have our own lives — it makes the time together so much more special."',
            '"Let\'s do something we\'ve never done before — I want to keep surprising each other."',
          ],
        },
        reunion: {
          tips: [
            'Convey that you\'ve grown and changed in genuine ways that aren\'t going back',
            'Express that you\'re reaching out because the timing feels right — and may not always be',
            'Be clear that you\'re not desperate, but that you genuinely value what you had',
          ],
          scripts: [
            '"I\'m not the same person I was then. And I wanted you to know that before too much more time passed."',
            '"I\'m not sure this opportunity to talk openly will always be there. That\'s why I\'m reaching out now."',
          ],
        },
      },
      friendship: {
        newFriend: {
          tips: [
            'Show that your time and social energy are genuine — you don\'t befriend just anyone',
            'Create limited, special hangout opportunities rather than being always available',
            'Let there be natural scarcity in your schedule to create value in the time you do give',
          ],
          scripts: [
            '"I don\'t hang out with many new people, but I\'d genuinely like to spend more time with you."',
            '"My schedule is pretty packed, but I\'d like to make time for this."',
          ],
        },
        deepen: {
          tips: [
            'Create special shared experiences that exist only between you two',
            'Let your deepest friendship energy be something they feel is reserved for a few special people',
            'Be selective about what you share to maintain depth and meaning',
          ],
          scripts: [
            '"I don\'t really talk about this with many people, but I trust you."',
            '"I feel like what we have is genuinely rare. I don\'t take it for granted."',
          ],
        },
        group: {
          tips: [
            'Create events or gatherings that feel exclusive or special',
            'Limit group size to maintain quality of connection',
            'Create traditions or rituals that only this group shares',
          ],
          scripts: [
            '"This is a small group thing — not everyone gets invited, and I\'m glad you\'re one of them."',
            '"Our group has something special that I don\'t have anywhere else."',
          ],
        },
        support: {
          tips: [
            'Let your support feel personal and chosen, not obligatory',
            'Be clear that you\'re showing up specifically for them, not just out of duty',
            'Let the rarity of the moment reinforce its significance',
          ],
          scripts: [
            '"I don\'t drop everything for everyone, but for you I will."',
            '"I want to be here for you — not because I have to be, but because I genuinely choose to be."',
          ],
        },
        repair: {
          tips: [
            'Let them sense that the window to reconnect won\'t always be open',
            'Express that you\'re reaching out now because the moment feels right',
            'Be genuine that this kind of friendship is hard to find',
          ],
          scripts: [
            '"I realized that friendships like ours don\'t come around often. I didn\'t want to let more time go by."',
            '"I\'m reaching out now because I don\'t want to wait until it\'s been too long."',
          ],
        },
      },
      negotiation: {
        price: {
          tips: [
            'Communicate genuine constraints around pricing, availability, or timeline',
            'Set a clear and credible deadline for your offer',
            'Show concretely what changes after the deadline',
          ],
          scripts: [
            '"This pricing is valid until [date]. After that, I can\'t guarantee the same terms."',
            '"We have limited capacity, and this offer is based on current availability."',
          ],
        },
        persuade: {
          tips: [
            'Show that the opportunity or window for action is time-sensitive',
            'Emphasize what is lost by not deciding now versus what is gained by acting',
            'Be specific about what changes if the decision is delayed',
          ],
          scripts: [
            '"If we don\'t move on this now, the market conditions that make it favorable won\'t last."',
            '"The longer we wait, the more this option closes off. Here\'s why this is the right moment."',
          ],
        },
        request: {
          tips: [
            'Frame the ask as time-sensitive and specific to right now',
            'Show that the opportunity for their help or involvement is genuinely limited',
            'Communicate urgency without creating pressure — focus on opportunity, not desperation',
          ],
          scripts: [
            '"I\'m asking you specifically because this needs to happen this week."',
            '"This is a narrow window and you\'re the right person for it — that\'s why I\'m coming to you now."',
          ],
        },
        conflict: {
          tips: [
            'Communicate that resolving the issue now is better for both parties than letting it escalate',
            'Show that the window for an amicable resolution has a limit',
            'Emphasize what both sides stand to lose by not resolving it promptly',
          ],
          scripts: [
            '"The sooner we resolve this, the better the outcome is for everyone. Let\'s not let it drag on."',
            '"I\'d rather we handle this now, while we still have the flexibility to find a good solution."',
          ],
        },
        daily: {
          tips: [
            'Create a sense of now-or-never around shared experiences and opportunities',
            'Show that windows for certain activities or moments are limited by time or season',
            'Communicate genuine urgency around time-sensitive family decisions',
          ],
          scripts: [
            '"This only comes around once a year — let\'s not miss it."',
            '"The kids are only this age once. Let\'s make this happen while we can."',
          ],
        },
      },
    },
  },
  {
    id: 'unity',
    name: 'Unity',
    subtitle: 'Unity',
    emoji: '🤝',
    color: 'teal',
    description: 'A sense of shared identity — of being part of the same "we" — amplifies influence. Belonging to the same family, community, team, or shared belief creates strong bonds of trust and goodwill.',
    mechanism: 'Humans are fundamentally social beings who feel special trust and affinity for members of their in-group. Creating a "we" feeling activates loyalty and a desire to support those seen as part of the same group.',
    caution: 'Creating false unity (using a common enemy to divide) or excessively inflaming in-group identity can lead to exclusion and harm. Use this principle to build bridges, not walls.',
    scenarios: {
      business: {
        proposal: {
          tips: [
            'Frame your proposal as part of a shared mission: "we\'re both trying to achieve [X]"',
            'Show that you share the same values and goals as your boss or stakeholders',
            'Use "we" language to emphasize common ownership of the outcome',
          ],
          scripts: [
            '"We\'re both trying to make this team more effective. This proposal is how I think we get there."',
            '"I know we both care about [value] — this is my take on how we pursue it."',
          ],
        },
        sales: {
          tips: [
            'Identify genuine shared values, experiences, or backgrounds with the client',
            'Frame your company as a partner in their mission, not just a vendor',
            'Show that your success is defined by their success',
          ],
          scripts: [
            '"We\'re not just selling you a product — we genuinely want to see your team succeed. That\'s our measure of success too."',
            '"We\'re both in [industry] trying to solve the same problem. That\'s why I think this partnership makes sense."',
          ],
        },
        team: {
          tips: [
            'Create a shared team identity with a clear mission, values, and shared purpose',
            'Celebrate team wins as "our" wins — foster a genuine sense of collective ownership',
            'Share your own vulnerabilities and challenges to create equal footing',
          ],
          scripts: [
            '"We\'re building something together here. When you win, we all win."',
            '"I want to be honest with all of you — I\'m proud of what we\'ve built as a team."',
          ],
        },
        internal: {
          tips: [
            'Find the shared company mission that unites different departments',
            'Frame cross-departmental collaboration as "serving the same customer"',
            'Build genuine relationships across teams, not just transactional ones',
          ],
          scripts: [
            '"At the end of the day, we\'re all working for the same mission. This is how I think we move it forward together."',
            '"What if we approached this as partners rather than separate departments?"',
          ],
        },
        career: {
          tips: [
            'Align your career goals explicitly with the company\'s direction',
            'Emphasize your commitment to the team\'s success, not just your own growth',
            'Show genuine belonging and loyalty to the people and mission of the organization',
          ],
          scripts: [
            '"I\'m not just looking for a raise — I\'m committed to where this company is going and I want to grow with it."',
            '"I see my future here. That\'s why I want to make sure I\'m set up to give my best."',
          ],
        },
      },
      romance: {
        approach: {
          tips: [
            'Find deep shared values, not just surface-level common interests',
            'Create a "just us" feeling early by referencing things only you two have in common',
            'Show that you see the world similarly — find the worldview connection',
          ],
          scripts: [
            '"It\'s rare that I meet someone who thinks about [topic] the way I do. You get it."',
            '"I feel like we\'re wired similarly. That doesn\'t happen often."',
          ],
        },
        date: {
          tips: [
            'Create shared rituals or "our things" during the date',
            'Reference previous shared experiences to deepen the "us" narrative',
            'Find moments of genuine alignment and name them — "that\'s so us"',
          ],
          scripts: [
            '"This is becoming our spot, isn\'t it?"',
            '"I love that we always end up talking about [topic]. That\'s just us, I think."',
          ],
        },
        confession: {
          tips: [
            'Frame your feelings as rooted in a deep sense of shared identity',
            'Reference the unique "we" that you\'ve built together',
            'Confess from a place of genuine belonging, not just attraction',
          ],
          scripts: [
            '"I feel more like myself when I\'m with you than with anyone else. That\'s rare."',
            '"There\'s a \'we\' that exists only between us, and I don\'t want to take it for granted anymore."',
          ],
        },
        maintain: {
          tips: [
            'Cultivate shared traditions, rituals, and "our story" over time',
            'Reinforce a shared identity that evolves as you both grow',
            'Face challenges with a "we figure this out together" mindset',
          ],
          scripts: [
            '"I love that we have so many things that are just ours."',
            '"Whatever this is, we\'ll figure it out together. That\'s who we are."',
          ],
        },
        reunion: {
          tips: [
            'Reconnect through shared identity: "we had something no one else has"',
            'Show that the unique "we" you built doesn\'t have to be in the past',
            'Approach it as returning to something real, not starting over',
          ],
          scripts: [
            '"What we had was genuinely rare. I don\'t think either of us has found that with someone else."',
            '"I\'m not asking to start over. I\'m asking if we can return to what we already built."',
          ],
        },
      },
      friendship: {
        newFriend: {
          tips: [
            'Find the shared worldview or values that create immediate kinship',
            'Create a "just us" dynamic by finding things that set you two apart from the crowd',
            'Reference shared community, background, or tribe to fast-track connection',
          ],
          scripts: [
            '"I feel like we just get each other. That doesn\'t happen often."',
            '"It\'s rare to meet someone from [place/background/experience]. We have to hang out more."',
          ],
        },
        deepen: {
          tips: [
            'Build a shared history of experiences, references, and inside moments',
            'Name the unique friendship you have — make it feel like a real "us"',
            'Be explicit about what makes your friendship unlike others',
          ],
          scripts: [
            '"There are things I only ever talk about with you. You\'re that person for me."',
            '"I think we have something genuinely rare here. I don\'t take it for granted."',
          ],
        },
        group: {
          tips: [
            'Build a group identity with shared history, values, and language',
            'Create rituals and traditions that belong only to this group',
            'Remind the group of what makes them special and unique together',
          ],
          scripts: [
            '"There\'s no other group like this one. I\'m lucky to be part of it."',
            '"This is our tradition — it wouldn\'t be the same without every one of you."',
          ],
        },
        support: {
          tips: [
            'Support from a place of "we\'re in this together," not "I\'m helping you"',
            'Reinforce the shared identity: "that\'s the kind of friends we are"',
            'Face their challenges as if they\'re your challenges too',
          ],
          scripts: [
            '"This is your problem, which means it\'s our problem. Let\'s figure it out."',
            '"We\'ve been through things together before. This is no different."',
          ],
        },
        repair: {
          tips: [
            'Appeal to the unique shared identity that existed between you',
            'Show that what you had is worth fighting for because it was genuinely special',
            'Reconnect at the level of who you are together, not just what happened',
          ],
          scripts: [
            '"I miss who we are when we\'re together. That\'s something I don\'t have with anyone else."',
            '"Whatever happened between us, the friendship we built was real. I don\'t want to just let that go."',
          ],
        },
      },
      negotiation: {
        price: {
          tips: [
            'Frame the negotiation as two parties with shared goals finding a solution together',
            'Find the mutual interest underneath each position and build from there',
            'Use "we" language to reinforce a collaborative rather than adversarial dynamic',
          ],
          scripts: [
            '"We both want this to work long-term. Let\'s find terms that make that possible."',
            '"I see us as partners in this — not on opposite sides of a table."',
          ],
        },
        persuade: {
          tips: [
            'Find the shared mission or value that makes this decision obvious for both parties',
            'Build a "same team" dynamic before presenting your proposal',
            'Show that success for them is also success for you',
          ],
          scripts: [
            '"We\'re ultimately trying to achieve the same thing here. This is how I think we get there."',
            '"I want this to work for you, not just for us. Here\'s why I think it does."',
          ],
        },
        request: {
          tips: [
            'Make the request from within a relationship of genuine shared belonging',
            'Reference the shared identity or community that makes this ask natural',
            'Frame it as what people like us do for each other',
          ],
          scripts: [
            '"We\'ve been through a lot together — that\'s why I\'m comfortable asking you this."',
            '"This is the kind of thing we do for each other in this community, and I\'m coming to you."',
          ],
        },
        conflict: {
          tips: [
            'Restore a sense of shared identity before trying to resolve the conflict',
            'Find the common ground beneath the disagreement',
            'Remind both parties of what they\'re collectively trying to protect',
          ],
          scripts: [
            '"Before we get into the details, I want to remind both of us why we started working together."',
            '"We have the same goal here — let\'s not lose sight of that."',
          ],
        },
        daily: {
          tips: [
            'Build a sense of "our family does things this way" around habits and values',
            'Create shared rituals that reinforce collective identity at home',
            'Frame household decisions as "what works best for us" rather than "what I want"',
          ],
          scripts: [
            '"In our family, we handle this kind of thing together. Let\'s figure it out."',
            '"This is who we are — let\'s make sure our decisions reflect that."',
          ],
        },
      },
    },
  },
]

export const scenarioLabels = {
  business:    { label: 'Business', emoji: '💼' },
  romance:     { label: 'Romance',  emoji: '💕' },
  friendship:  { label: 'Friendship', emoji: '👫' },
  negotiation: { label: 'Negotiation', emoji: '🤝' },
}

export const businessSubs = {
  proposal: { label: 'Boss Proposal',         emoji: '📋' },
  sales:    { label: 'Sales & Deals',          emoji: '💼' },
  team:     { label: 'Team Management',        emoji: '👥' },
  internal: { label: 'Internal Coordination',  emoji: '🔄' },
  career:   { label: 'Salary & Promotion',     emoji: '📈' },
}

export const romanceSubs = {
  approach:   { label: 'First Approach',        emoji: '💌' },
  date:       { label: 'Dating & Closeness',    emoji: '🍽️' },
  confession: { label: 'Confession & Bonding',  emoji: '💑' },
  maintain:   { label: 'Long-term & Partners',  emoji: '🏠' },
  reunion:    { label: 'Reconciliation',        emoji: '🔄' },
}

export const friendshipSubs = {
  newFriend: { label: 'Making New Friends',      emoji: '🤝' },
  deepen:    { label: 'Deepen Relationship',     emoji: '💬' },
  group:     { label: 'Group Presence',          emoji: '👥' },
  support:   { label: 'Mutual Support & Trust',  emoji: '🫂' },
  repair:    { label: 'Reconnecting',            emoji: '🌱' },
}

export const negotiationSubs = {
  price:    { label: 'Price & Terms',        emoji: '💰' },
  persuade: { label: 'Pitching Ideas',       emoji: '🎯' },
  request:  { label: 'Asking Favors',        emoji: '🙏' },
  conflict: { label: 'Conflict & Complaints', emoji: '🔧' },
  daily:    { label: 'Everyday Situations',  emoji: '🏠' },
}
