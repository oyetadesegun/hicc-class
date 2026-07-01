import 'dotenv/config';
import prisma from '../src/lib/prisma';

// ─────────────────────────────────────────────────────────────
// WEEK 1 MODULE CONTENT
// ─────────────────────────────────────────────────────────────

const module1Content = `## What is Vibe Coding?

Think about how you would explain a task to a very smart and capable personal assistant. You would not give them a technical manual. You would just describe what you need in plain English and trust them to handle the details. That is the simplest way to describe vibe coding.

Vibe coding is the practice of building software by describing what you want in everyday language, and letting an AI system write the actual code for you. You are not learning a programming language. You are not memorising syntax or commands. You are having a conversation, and at the end of that conversation, a working piece of software exists. You review it, give feedback, refine it, and gradually, it becomes exactly what you had in mind.

The name itself tells you something. "Vibe" as in the feeling, the direction, the general intention. You give the AI your vibe, your vision, and it builds accordingly. It is a real, legitimate, and rapidly growing way of creating software. Not a shortcut. Not a toy. A genuine method.

## Where Did It Come From?

Vibe coding has an exact birthday. On 2 February 2025, a man named Andrej Karpathy published a post on X (formerly Twitter) that changed how millions of people thought about programming. Karpathy is not just anyone. He was one of the original co-founders of OpenAI, and before that, he was the Director of AI at Tesla, one of the most advanced technology companies in the world. When someone like that says something has changed, people listen.

In that post, he described a new way of working where you fully give in to the AI's direction. Instead of manually writing code line by line, you describe what you want, let the AI produce it, and guide the process through natural language. That post reached over 4.5 million views. Collins Dictionary, which tracks how language evolves each year, named "vibe coding" its Word of the Year for 2025. That is how fast this concept moved from one social media post to mainstream conversation.

## Traditional Coding vs Vibe Coding: What Actually Changed?

Here is an analogy that makes this very clear. Imagine you want a new piece of clothing, say a custom suit. Traditional programming is like being the tailor yourself. You need to know how to cut fabric, operate a sewing machine, measure precisely, and understand every stitch. It takes years of training to do it properly, and even then, a small mistake can ruin the whole piece.

Vibe coding is like being the client. You walk into the tailoring shop, describe exactly what you want (the style, the colour, the fit, the occasion) and the tailor handles every technical detail. You are still fully in charge of the outcome. You still approve it, request adjustments, and decide when it is right. But you are not holding the needle.

The shift is from doing the technical execution yourself to directing someone capable of doing it for you. Your most important skill is no longer memorising programming languages. It is knowing what you want and being able to describe it clearly. That is a skill most people already have.

## Real-World Examples That Prove It Works

This is not a theoretical concept that lives only in research labs. Vibe coding is already producing real results in the real world. Y Combinator, the startup incubator that helped build companies like Airbnb, Dropbox, and Reddit, reported in 2025 that a full quarter of the companies in their programme had codebases that were 95 percent AI-generated. Not experimental demos. Real companies with real customers and real revenue.

Closer to home: churches, small businesses, and ministry organisations have been using vibe coding to build member management tools, event registration pages, donation tracking systems, and communication platforms. Things that would previously have cost serious money to commission from a developer. The access that was once limited to those with technical training or large budgets is now genuinely open to anyone willing to learn.

## Common Misconceptions Worth Clearing Up Now

**Misconception one:** "The AI just produces unreliable, broken code." This was true of early AI models a few years ago. It is not an accurate description of modern systems like Claude, GPT-4o, or Gemini. These models produce genuinely functional code for a wide range of applications. It requires review and refinement, as any draft does, but the quality is real.

**Misconception two:** "You need some programming background to do this." You do not. The requirement is the ability to think clearly about what you want and describe it well. People with no technical background at all have built and launched working applications through vibe coding.

**Misconception three:** "This is only for simple things." It is not. Sophisticated web applications, multi-user platforms, data systems, and API integrations have all been built through vibe coding. The ceiling rises as the AI improves, and it improves consistently.`;

const module2Content = `## The Shift That Is Already Happening

For most of the history of computing, software development was a gated profession. You needed years of formal education or self-teaching, access to expensive development tools, and often a team of people around you. The result was that only a small fraction of the world's population could build digital products, even though a much larger fraction had ideas worth building.

Vibe coding breaks this open. It is not simply a productivity boost for existing developers. It is a bridge that connects the rest of the world (entrepreneurs, ministry leaders, teachers, designers, and ordinary people with good ideas) to the ability to build real things with technology. That is a significant shift. And it is happening right now, not in the future.

## Three Barriers That Vibe Coding Removes

Traditional software development had three barriers: time, money, and knowledge. It took years to become a competent developer. Hiring professional developers cost a significant amount, often well outside the budget of a church, a small business, or an individual. And the technical knowledge required was steep enough that most people gave up before making meaningful progress.

Vibe coding reduces all three. The time from idea to working prototype is now measured in hours, not months. The cost is reduced to a platform subscription, many of which have free tiers sufficient for learning and small projects. And the knowledge requirement has shifted from technical expertise to clear thinking and good communication. Two things most people already have in abundance.

## What This Means Specifically for Church and Ministry

Many churches and ministries need digital tools that are specific to how they operate, and those tools are rarely available off the shelf. A custom visitor follow-up system. A form that collects prayer requests and routes them to the right prayer team. A dashboard that tracks volunteer attendance. An event registration page that matches the church's branding. Each of these would previously require hiring a developer or paying a technology agency, with costs that most churches cannot comfortably absorb.

With vibe coding, these tools become achievable goals for a church administrator, a pastor's assistant, or a tech-minded member of the congregation who takes the time to learn. The church that embraces this now is the church that serves its community with better tools, faster responses, and more personal attention, at a fraction of what it would otherwise cost.

## Career and Entrepreneurial Doors That Open

Learning to vibe code opens professional paths that previously required a computer science degree to access. A freelancer can offer application development to small businesses without a traditional programming background. An entrepreneur can build a product, test it with real users, and validate the idea before spending money on a development team. A professional in any field can identify a problem in their industry, build a tool that solves it, and turn that tool into a product or service.

The demand for people who can build with AI is growing in every sector. The people who develop this skill now, while the ecosystem is still forming, are positioning themselves ahead of a wave that will only get larger. The window of advantage for early adopters is real, and it is still open.

## Where Vibe Coding Is Heading

The direction is clear: AI systems will become increasingly capable of taking a project from an initial description all the way to a deployed, production-ready product with less and less human intervention at each step. The concept of AI agents (systems that can plan, execute, and self-correct across a multi-step development task) is already emerging and will become mainstream within the next two to three years.

For practitioners who build the foundational skills now, adapting to these more powerful systems will feel like a natural progression rather than a learning curve. The core skills (clear communication, effective prompting, logical thinking, and outcome-focused planning) will remain relevant regardless of how the tools evolve. Investing in these skills now is an investment that compounds over time.`;

const module3Content = `## Why Mindset Comes Before Tools

Most people who struggle with vibe coding do not struggle because the tools are too complex. They struggle because they approach the tools with the wrong expectations. They expect to write one prompt and receive a perfect, finished product. When that does not happen, they conclude that it does not work, and they stop. The people who succeed are the ones who understand from the beginning that vibe coding is a process, not a button.

This module is entirely about the mental foundation. Nothing that comes after it matters if this foundation is not in place. A bad mindset with great tools produces frustration. The right mindset with even basic tools produces results. Take this section seriously.

## Outcome-Focused Thinking: Describe What, Not How

In traditional programming, the developer thinks about the "how": how will this data be stored, how will the logic flow, how will the interface be built. In vibe coding, your job is to think about the "what": what should the user be able to do, what should it look like, what problem does it solve.

Think of it like giving directions to a taxi driver. If you know how to drive to your destination yourself, you might give turn-by-turn instructions. But if you simply tell the driver the destination and trust them to get you there, you arrive at the same place with far less effort on your part. Vibe coding is the same. Describe the destination clearly. The AI handles the route.

The practical implication of this is that the clearer you are about what you want, the better the output will be. Projects stall not because the AI fails but because the person directing it has not yet figured out exactly what they are trying to build. Clarity of outcome is the single most important prerequisite.

## Vibe Coding is a Conversation, Not a Command

One of the most useful mental shifts you can make is to stop thinking of a prompt as a command and start thinking of it as the opening line of a conversation. Just as you would not send one WhatsApp message and expect a complete, perfect response to every possible question, you engage back and forth, clarifying and refining as you go.

You describe something. The AI produces it. You review what came back. You say "this is close but the button should be green, not blue, and the form should have an extra field for the phone number." The AI updates it. You review again. This cycle (describe, receive, review, refine) is the actual workflow. Experienced vibe coders are not people who write perfect first prompts. They are people who iterate effectively and patiently.

## Errors Are Normal: Here Is How to Handle Them

Errors will happen. The AI will sometimes misunderstand the instruction. Code will not behave as expected. Something that worked yesterday will seem broken today. This is normal. It is not a sign that you are doing it wrong. It is a sign that you are doing it at all.

The correct response to an error is curiosity, not frustration. Ask yourself: what specifically went wrong, and how can I describe the correction to the AI? Copy the error message exactly and paste it back into the conversation. Describe what you were trying to do when the error appeared. In most cases, the AI will diagnose the problem and fix it in the next reply. Treat every error as information, not failure.

## Progress Comes From Doing, Not Watching

Reading about vibe coding, watching tutorials, and sitting in lectures all provide valuable context. But the actual skill develops from building things. The best investment you can make in this course is to attempt things outside of class hours, even small things, even things that do not work perfectly the first time.

Every completed project, however simple, creates a reference point. It answers the internal question of whether this is actually achievable for you personally. Once you know from direct experience that you can do this, the only remaining question is how ambitious you want to be with it. The first project is always the hardest. After that, each one gets easier.`;

const module4Content = `## Two Categories You Need to Understand

The vibe coding ecosystem has two distinct types of tools, and understanding the difference between them is important before you choose where to start. The first type is AI coding agents: these are conversational AI systems you interact with through a chat interface, like a WhatsApp conversation but with an AI that builds software. The second type is AI-integrated IDEs: these are dedicated coding environments that have AI built directly into the editing experience, like a fully equipped workshop rather than just a conversation.

Neither type is strictly better than the other. They serve different needs. Most beginners start with one of the more accessible agents, build confidence, and then move into an IDE as their projects grow. Others prefer to start with an IDE from the beginning. This module introduces both so you can make an informed decision.

## Category 1: AI Coding Agents (The Chat-Based Tools)

AI coding agents are the chatbot-style tools you describe your project to and receive code in return. Think of them like sending a very detailed brief to a highly capable technical freelancer and receiving a draft back, except the response comes in seconds, not days, and you can ask for revisions instantly.

Claude, built by Anthropic, is particularly strong at following complex, detailed instructions and reasoning through nuanced requirements. It handles long, specific briefs very well and is the recommended agent for this course. ChatGPT and GPT-4o, built by OpenAI, are the most widely used globally and perform strongly across a broad range of coding tasks. Gemini, built by Google, integrates deeply with Google Workspace tools like Drive, Docs, and Sheets, making it useful if your project involves those platforms.

DeepSeek is an open-source model from a Chinese research team that matches or beats commercial models on many coding benchmarks, often at lower cost. Kimi, from Moonshot AI, is known for handling very large amounts of context, useful for complex projects with a lot of documentation. Grok, from Elon Musk's xAI company, offers access to real-time information alongside coding capability. Qwen, from Alibaba, provides strong multilingual support and solid technical performance.

## Category 2: AI-Integrated Development Environments (IDEs)

An IDE is a dedicated application for building software. Think of it as a fully equipped professional workshop rather than a simple chat window. An AI-integrated IDE embeds the AI directly into that workshop, so it can see your entire project, understand the relationships between different files, make changes across multiple parts of the codebase simultaneously, and give contextual suggestions as you work. For complex projects, this level of integration is significantly more powerful than a chat-only approach.

Cursor is currently the most widely used AI-first IDE in the world. It recently became the fastest software application in history to reach one billion dollars in annual revenue, which tells you something about how quickly developers have adopted it. It is built on the same foundation as VS Code, which means it feels familiar, but it has deep AI integration built in from the ground up. Cursor is the recommended IDE for participants who want to go deeper than the chat-only tools.

VS Code with GitHub Copilot is the most broadly used combination for developers who want to add AI to a familiar environment. Windsurf, made by Codeium, is a fully AI-native IDE with a built-in autonomous coding agent. Kiro, Amazon's AI IDE, takes a specification-driven approach: you describe the plan first, and the AI helps you document and then build it systematically. Codex CLI from OpenAI is a terminal-based agent for those comfortable working in the command line. JetBrains AI Assistant adds AI to the family of JetBrains editors including IntelliJ, PyCharm, and WebStorm. Zed is a fast, collaborative editor with built-in AI especially suited to teams. Replit is a browser-based platform that combines an editor, an AI assistant, and hosting in one, making it the easiest starting point for anyone who wants to build and publish without installing anything.

## How to Choose the Right Tool for You

For complete beginners in this class, the starting recommendation is Claude (claude.ai) as your AI coding agent. It is free to start, works in the browser, and handles instructions extremely well. If you want to go further and build inside a proper development environment, Cursor is the recommended IDE. Replit is the best option for anyone who wants to build and publish something without installing software on their computer.

The most important thing at this stage is to choose one tool, get comfortable with it, and build something real. You will naturally discover which tools work best for the kind of projects you want to build. Switching tools after your first project is always an option, but switching before finishing anything is a way of delaying the real learning.`;

// ─────────────────────────────────────────────────────────────
// WEEK 2 MODULE CONTENT
// ─────────────────────────────────────────────────────────────

const module5Content = `## What is Prompt Engineering and Why Does It Matter?

Prompt engineering sounds like a technical term, but it is simply the skill of communicating with an AI in a way that gets you the best results. Think of it this way: if you go to a market and tell the tailor "make me something nice," you might get something completely different from what you had in mind. But if you say "I want a navy blue shirt, slim fit, with a small collar, long sleeves, and buttons down the front," you are much more likely to get exactly what you wanted. The tailor is the same person in both cases. The difference is in how clearly you communicated.

In vibe coding, the AI is like that tailor. It is capable of excellent work, but only if it understands exactly what you need. Prompt engineering is the discipline of communicating that clearly and precisely. It is not complicated, but it makes an enormous difference in the quality of what you get back.

## The Four Components of a Great Prompt

Every effective vibe coding prompt has four elements. You do not always need all four, but knowing them helps you think through what to include:

- **Context** - Tell the AI what kind of project this is and what already exists. Example: "I am building a website for my church's youth group."
- **Task** - Describe specifically what needs to be done right now. Example: "Add a section that lists three upcoming events with the date, time, and a short description for each."
- **Format** - Describe how the output should look. Example: "Display the events as cards arranged in a row, with a light blue background."
- **Constraints** - Tell it what to avoid or what rules apply. Example: "Do not use any paid images. Use simple, clean design with no clutter."

A prompt that addresses all four of these is almost always more useful on the first attempt than one that only addresses one or two.

## The Single Most Powerful Habit: Being Specific

If there is one thing to take from this module, it is this: specificity is everything. The difference between a vague prompt and a specific one is the difference between getting something you have to rebuild entirely and getting something you only need to adjust slightly.

Compare these two prompts. Weak: "Build me an event registration form." Strong: "Build an HTML event registration form for a church conference called Arise 2026. The form should have fields for full name, email address, phone number, which session the participant wants to attend (Morning, Afternoon, or Full Day), and any dietary requirements. Use a dark blue header with the conference name in white text. Include a submit button that shows a confirmation message below the form after it is clicked." The AI receives the same instruction in both cases. But the second prompt produces something useful immediately. The first produces a generic form that may not match any of your actual requirements.

## Refining Your Output: The Art of Iteration

No first prompt produces a perfect result for a complex project. The right approach is to treat every output as a first draft and give specific, actionable feedback to improve it. Think of it like editing a document with a collaborator: you do not throw away the whole draft because one paragraph is off. You point to the specific thing that needs changing.

Instead of saying "this does not look right," say "the navigation bar needs to be shorter; reduce the height to about 60 pixels and change the background to dark navy blue." Instead of "the form is not working," say "when I click Submit, nothing happens. Please add a function that checks the email field is not empty and shows a green success message below the form after the button is clicked." Precise feedback produces precise improvements. This is the loop (describe, receive, review, refine) and it is the actual method by which real projects are built.

## When to Start Fresh

Sometimes a conversation with the AI reaches a point where things have become tangled. Too many revisions have accumulated, the AI seems confused about what was previously built, and each new change seems to break something else. This is not failure. It is simply a signal to start a new, clean conversation.

The best approach when this happens is to begin fresh with a well-structured prompt that incorporates everything you learned from the previous attempt. The second version of anything built through vibe coding is almost always better than the first, because you now know much more specifically what you want and how to describe it. Starting over is a strategic decision, not a retreat.`;

const module6Content = `## Choosing the Right First Project

The most common mistake beginners make is choosing a first project that is too ambitious. They have a big idea (an entire platform, a complex app, something that takes professional developers months to build) and they start there. When it does not come together in one sitting, they conclude that vibe coding does not work. The solution is simple: start small, finish it, publish it, and then scale up.

A good first project is one you can complete in a single session: a personal landing page that introduces who you are, a simple to-do list application, a basic calculator, a static church event page, or a contact form with a thank-you message. These are small enough to finish and real enough to be genuinely useful. The value of a completed small project is far greater than an incomplete ambitious one, because completing it gives you the confidence and the experience to tackle something bigger next.

## Breaking a Project Into Steps

Even a simple project is easier to build in steps than all at once. Think of it like cooking a full meal: you do not throw every ingredient into one pot at once and hope for the best. You prepare each component separately, in the right order, and bring them together at the end.

In vibe coding, this means starting with the structure or layout (the skeleton of the project) before adding any features or styling. Once the skeleton is working, add one feature at a time. Test each addition before moving to the next. This makes it easy to identify when something goes wrong, because you know the problem was introduced by the most recent change rather than somewhere deep in a tangle of simultaneous additions.

## Reviewing What the AI Builds: Without Coding Knowledge

A common worry among beginners is that they cannot evaluate code they do not understand. Here is the reassurance: you do not need to understand the code to know if it is working. You evaluate it the way a client evaluates any work, functionally. Does the button do what it should when you click it? Does the form collect the right information? Does the layout look the way you described? If the answer to these questions is yes, the code is working, regardless of what is happening inside it.

Where your attention is needed is in recognising when the result does not match what you described. That is usually immediately obvious: something looks wrong, or behaves differently than expected. When that happens, describe the specific discrepancy to the AI and ask it to correct it. Most mismatches are resolved in one or two additional prompts.

## Publishing Your Project: Making It Live and Accessible

Publishing a web project online so that anyone in the world can access it sounds technical, but it genuinely is not. Several platforms offer free, one-click publishing that turns your project into a live website with a real URL within seconds. Vercel and Netlify are the two most popular free hosting options. Replit has a publish button built directly into the platform. Lovable does the same.

The feeling of sharing a link that goes to something you built yourself is genuinely different from just seeing code on a screen. It makes the project real. It is also the moment where participants realise they are not learning a concept; they are developing a real skill with real output. Do not skip the publishing step. It matters.`;

const module7Content = `## Modular Development: One Piece at a Time

Once you move beyond a single-page project, the way you approach building needs to become more structured. Modular development means treating your project as a collection of independent components, each of which is built and tested before the next one is started. Think of it like building a car: the engine is assembled and tested before it is installed in the body. The braking system is tested before the car is driven. You do not put everything together and then try to figure out what is wrong.

In vibe coding, this translates to writing focused prompts that address one feature at a time, then confirming it works before adding the next. This approach produces cleaner code, makes debugging easier, and reduces the risk of one change accidentally breaking something that was already working.

## Debugging: How to Fix Things When They Break

Every application breaks at some point. This is not unique to vibe coding; it is true of software built by the best professional developers in the world. What matters is knowing how to fix things when they do break.

The process in vibe coding is straightforward. When an error message appears, copy it exactly (every character) and paste it into your conversation with the AI along with a description of what you were trying to do when the error occurred. The AI will diagnose the cause and suggest a fix. If the first fix does not solve it, describe the new error and continue. Most bugs that a beginner will encounter in typical projects are resolved within two or three rounds of this conversation. The key is providing the exact error text rather than a summary of it, because exact text gives the AI the precise information it needs.

## Adding User Interactions

A static page that just displays information is a good start, but most useful applications involve some level of interaction: a button that does something when clicked, a form that collects and processes information, a navigation menu that moves between sections, or content that changes based on what the user selects. Each of these can be built through prompting.

When requesting an interactive element, always describe the behaviour, not just the appearance. Do not just say "add a button." Say "add a button labelled Get Started that, when clicked, scrolls the page down to the Contact section." Do not just say "add a dropdown menu." Say "add a dropdown menu with three options (Morning Session, Afternoon Session, and Full Day) and when an option is selected, display a short description of that session below the dropdown." The more precisely you describe the behaviour, the more accurately it will be built.

## Basic Data Management: Storing and Displaying Information

Many useful applications need to store information: member details, event registrations, resource bookings, prayer requests. Handling data storage in traditional development requires significant technical knowledge. In vibe coding, platforms like Supabase, Firebase, and Airtable handle the database layer, and the AI can generate all the code needed to connect to them.

You do not need to understand how these databases work internally. You describe what you need: "I want to store the name, email, and phone number of everyone who fills in this registration form, and display all entries in a simple table that I can access from an admin page." The AI generates the connection code and the interface. Your job is to describe the requirement clearly, which, by now, you know how to do.

## APIs: Connecting Your App to the World

An API (Application Programming Interface) is essentially a way for one piece of software to talk to another. Think of it like a waiter in a restaurant: you (the application) tell the waiter (the API) what you want, the waiter goes to the kitchen (the external service), and brings back what you asked for. You never go into the kitchen yourself.

In practical terms, APIs allow your application to send WhatsApp messages, pull live weather data, sync with Google Calendar, process payments, or send automated SMS notifications. All of these can be integrated into a vibe-coded application through straightforward prompting. Describe the integration you want, provide the relevant API key, and the AI generates the connection code.`;

const module8Content = `## Version Control: Saving Your Work Properly

Imagine writing a long document and saving it just once at the end. If something goes wrong midway through (you accidentally delete a section, or a change makes everything worse) you have no way to go back. Professional developers avoid this problem using version control: a system that saves a snapshot of the project at every meaningful stage, so any change can be reviewed and any mistake can be undone.

GitHub is the most widely used version control platform and is free for most use cases. Setting up a GitHub account, creating a repository for your project, and making regular commits (snapshots) are habits that significantly improve the reliability of everything you build. AI coding agents like Cursor integrate directly with GitHub, making this workflow much more accessible than it once was.

## Combining Multiple AI Tools

As your projects become more sophisticated, you will find that different tools have different strengths, and that combining them produces better results than relying on any single tool. A productive workflow might look like this: use Claude to plan the architecture and write the initial codebase, then switch to Cursor to implement and test features inside the IDE, then use Vercel to handle deployment and hosting.

This is not about switching tools constantly. It is about knowing what each tool is best at and using it for that specific task. Claude is excellent at reasoning through complex requirements. Cursor is excellent at managing a multi-file project. Vercel is excellent at deploying quickly and reliably. Using each tool for its strength is the mark of an experienced practitioner.

## Building for Other People: A Higher Standard

Building something for yourself allows a high tolerance for imperfection. If it mostly works, that is fine; you know what it is supposed to do. Building for other people (a client, a congregation, or a paying customer) requires a genuinely higher standard. Other people do not know how the system was built. They only know whether it works the way they expect it to.

This means testing the application thoroughly before sharing it. It means considering how different types of users might interact with it, including people who are less technically confident. It means ensuring that error messages are clear and helpful rather than confusing. And it means reviewing the application for security, particularly any part that handles personal information, login credentials, or financial data. The AI can perform a basic security audit when asked to do so explicitly. Make this a standard part of your pre-launch process.

## Turning This Into Income

Vibe coding creates real commercial opportunities. Freelance development is the most direct: businesses, churches, community organisations, and individuals need custom digital tools and are often willing to pay someone who can build them quickly, affordably, and reliably. Digital products are another path: build a tool that solves a common problem and offer it as a subscription or one-time purchase. Consulting is a third: help organisations understand how to integrate AI-assisted development into their own operations.

Each of these paths is accessible to someone who has built genuine competence through this course. The portfolio you build during this programme, and the projects you build after it, is the evidence you will use to open these doors. Every project you complete is both a skill-builder and a portfolio piece.

## Building a Portfolio and Continuing to Grow

A portfolio is the most effective way to demonstrate your capability to anyone who has not seen you work. A strong vibe coding portfolio includes three to five projects that show range, quality, and problem-solving ability. Each project should be accompanied by a brief explanation of the problem it solves and the tools used to build it.

GitHub is the standard platform for hosting these, and the portfolio website itself (which you now know how to build) is typically the best centrepiece.

Staying current in this field requires consistent engagement. The tools are evolving rapidly, new platforms are launched regularly, and the community of vibe coders is active and generous with knowledge. Following key voices on YouTube and X, participating in communities on Discord and Reddit, and committing to building one new project every month are the habits that turn this course into a lasting capability rather than a one-time experience.`;

// ─────────────────────────────────────────────────────────────
// WEEK 3 MODULE CONTENT (AI AUTOMATION FOUNDATIONS)
// ─────────────────────────────────────────────────────────────

const module9Content = `## What is Automation and Why Does It Matter?

Automation, at its most basic, means setting up a system to do a task for you automatically so you do not have to do it manually every time. It has existed in the physical world for a long time - think of a water pump that fills a tank automatically when it gets low, rather than requiring someone to stand there and refill it manually. Digital automation applies the same principle to tasks on a computer: instead of you manually performing a repetitive action, a system performs it for you.

Here is a simple, relatable example. Imagine that every time someone fills in your church's visitor form on your website, you have to manually write them a welcome email, add their details to a spreadsheet, and send their information to the pastoral care team. If five people fill in the form on a Sunday, that is three manual tasks per person - fifteen tasks every Sunday. Automation can do all of that the moment the form is submitted, without you lifting a finger. That time is yours back.

## Old Automation vs New AI-Powered Automation

Traditional automation followed fixed rules. 'When X happens, always do Y.' This works well for simple, predictable tasks. But it breaks down the moment the situation is even slightly different from what the rule expected. If the rule says 'send a welcome email,' it sends the same email to every person - a new baby, a grieving widow, a teenager, and a retiree all receive the same message, regardless of context.

AI-powered automation changes this fundamentally. The AI can read the content of a form response, understand who is filling it in and what they have said, and generate a response that is genuinely appropriate for that specific person. Instead of one fixed email, the system produces a thoughtful, personalised reply that reflects the actual content of the message. This is the leap that makes modern automation genuinely transformative rather than just convenient.

## The Real-World Case for Automation

Time is the most limited resource any person or organisation has. Every hour spent on repetitive, manual tasks is an hour that cannot be spent on things that require human judgment, creativity, or relationship. Automation does not replace people - it removes the tasks that were never really suited to people in the first place, freeing them to do the things only they can do.

For a church, this might mean that the administrator who spent three hours every week manually sending follow-up emails can now spend that time counselling, planning, or connecting with members. For an entrepreneur, it might mean that a system handles customer onboarding automatically while they focus on product and strategy. The productivity gain is real, consistent, and compounding - each automation you set up keeps working for you every day, long after you set it up.

## Church and Ministry Applications

Automation is particularly valuable in ministry contexts, where there is typically a lot of communication to manage and often a small team - or a single person - managing it all. Some immediate applications: every new visitor who fills in a form automatically receives a personalised welcome email and is added to the follow-up list. Every event registration automatically sends a confirmation to the attendee and a notification to the event coordinator. Every prayer request submitted online automatically notifies the prayer team and is logged in a shared document. These are not complex systems to build - and once built, they run indefinitely.`;

const module10Content = `## Task Automation

Task automation is the simplest and most familiar form. It involves a single, repeatable action triggered by a specific event. When someone fills in a form, send them an email. When a new row is added to a spreadsheet, post a notification to a messaging group. When a payment is received, generate and send an invoice. One trigger, one action. These are the easiest automations to build and are a great starting point for beginners.

## Workflow Automation

Workflow automation goes further by connecting multiple steps into a sequence. Instead of one trigger and one action, you have one trigger and a chain of actions that follow one another in order. A visitor fills in a form (trigger), a personalised welcome email is sent (step one), their details are added to a CRM (step two), a follow-up task is created for the pastoral team (step three), and a weekly summary report is updated (step four). The whole sequence runs automatically from a single form submission. This is where automation starts producing serious time savings.

## Data Automation

Data automation handles the collection, cleaning, organisation, and movement of information. Think of it as a very diligent administrative assistant who never gets tired, never makes a typo, and never forgets a step. Data automation can pull responses from multiple forms and consolidate them into one spreadsheet, reformat information from one system to match the requirements of another, remove duplicate entries, and generate regular summary reports - all without any human involvement.

## Content Automation

Content automation uses AI to generate written content - posts, emails, summaries, announcements - and schedules or publishes them automatically. A system can draft the weekly church newsletter based on a list of events and announcements you provide, generate social media posts from sermon notes, or create personalised birthday messages for every member of the congregation. The AI writes the content, the automation delivers it - all on a schedule you define.

## Communication Automation

Communication automation manages the flow of messages between your organisation and the people it serves. Smart email replies that are drafted by AI and reviewed before sending. Follow-up reminders sent automatically to people who registered for an event but have not confirmed attendance. SMS notifications sent the day before a programme. WhatsApp broadcast messages to a defined group. All of these can be configured to happen without manual effort on each occasion.

## Decision Automation

Decision automation is the most sophisticated type. It involves an automation that takes different actions depending on the content or nature of the information it receives. If a form response contains a prayer request, route it to the prayer team. If it contains a complaint, route it to the pastoral office. If it contains a compliment, send a thank-you and log it for the report. If a donation amount is above a certain threshold, send a personalised acknowledgement from the senior pastor. These conditional, intelligent responses are what AI-powered automation makes possible.`;

const module11Content = `## Zapier - The Recommended Starting Point

Zapier is the most widely used and beginner-friendly automation platform in the world. Its core concept is simple: a 'Zap' is an automation that connects two or more apps. You choose what triggers the automation (a form submission, a new email, a new spreadsheet row) and what action should follow (send an email, post a message, create a task, add a row to a different spreadsheet). Zapier connects to over 7,000 apps, which means it can link almost any two tools you are already using.

The interface is clean and visual. Building a Zap feels more like filling in a form than writing code. For the purposes of this course, Zapier is the recommended starting platform. It has a free tier that is sufficient for learning and small-scale use, and its documentation and community resources are excellent. Start here.

## Make (formerly Integromat) - When You Need More Power

Make is a more visually sophisticated platform that gives you greater control over how automation workflows are structured. Where Zapier uses a simple list of steps, Make uses a visual canvas where you can see the entire workflow laid out as a diagram - with branches, loops, and multiple paths depending on conditions. This makes it better suited to complex automations but also means there is more to learn before you can use it effectively. Make is a natural next step after you are comfortable with Zapier.

## n8n - The Open-Source Option

n8n is an open-source automation platform, which means the underlying code is publicly available and the software can be hosted on your own server. This gives you maximum control and, ultimately, lower cost - but it requires more technical setup than Zapier or Make. n8n is an excellent tool for advanced users and for organisations that want to build sophisticated automation systems without ongoing per-task fees. For beginners, it is better to start with Zapier and return to n8n once you have solid foundational experience.

## Claude and ChatGPT as the AI Brain Inside Automations

One of the most powerful capabilities of modern automation platforms is the ability to include an AI model as one of the steps in a workflow. Instead of a fixed, pre-written response, the AI reads the incoming content and generates an appropriate, contextual response in real time. Zapier and Make both support direct integration with Claude and ChatGPT. This is what transforms a simple task automation into an intelligent, adaptive system - and it is the focus of Week 4.

## Built-In Office Automation Tools

Several tools you may already use have AI automation built directly into them. Google Workspace (including Gmail, Google Sheets, and Google Docs) has AI features that can summarise emails, draft replies, analyse data, and automate routine tasks within those applications. Microsoft Copilot brings similar capabilities to Outlook, Word, and Excel. Notion AI adds intelligent automation and content generation within the Notion workspace. These tools are worth exploring even if you never set up a standalone automation - they can save significant time in day-to-day work.`;

const module12Content = `## The Vocabulary You Need

Before building your first automation, there are four terms that every automation platform uses, and understanding them makes the entire experience much clearer:

- **Trigger**: the event that starts the automation. A form is submitted. A new email arrives. A new row is added to a spreadsheet. Something happens, and that something is the trigger.
- **Action**: what the automation does in response to the trigger. Send an email. Add a row to a spreadsheet. Post a message. Create a task. One automation can have multiple actions.
- **Filter**: a condition that must be met before the automation continues. Only send the follow-up email if the person selected 'First Time Visitor' on the form. Only notify the team if the form was submitted between Monday and Friday.
- **Condition**: similar to a filter, but used to branch the automation in different directions depending on what the data contains. If the prayer request field is filled in, route to the prayer team. If it is empty, proceed to the standard follow-up.

## Planning Before Building

Before you open any automation platform, map the workflow on paper. Write down: what is the trigger (what starts this automation)? What are the steps that should follow, in order? What conditions, if any, should affect what happens? What is the final outcome?

This planning step seems simple but saves a significant amount of time during the actual build. It also makes it much easier to describe the automation to the AI if you are using Claude or ChatGPT to help you configure it. A clear plan leads to a clean build.

## Step-by-Step: Your First Automation

The recommended first automation is a form-to-email notification: when someone fills in a Google Form, they automatically receive a personalised confirmation email. This automation involves a trigger (Google Form submission), a filter (optional - maybe only if a specific field was filled in), and an action (send a Gmail message).

In Zapier, this is built by selecting Google Forms as the trigger app, choosing the event 'New Form Response,' connecting your Google account, selecting the specific form, then adding Gmail as the action app, choosing 'Send Email,' and composing the email using the form response data to personalise it. The entire setup takes under fifteen minutes for someone building it for the first time.

## Testing Before Going Live

Every automation should be tested before it is activated for real use. Most platforms have a built-in test function that runs the automation with sample data so you can verify it behaves as expected without actually triggering any real emails or notifications. Run the test. Check that every field populates correctly. Verify that the email or message appears exactly as intended. Fix anything that is off. Only then activate the automation.

It is also good practice to run a live test - fill in the form yourself with real data, trigger the automation, and confirm everything works end to end. This final check is what separates a professional automation setup from one that goes live and immediately produces errors.`;

// ─────────────────────────────────────────────────────────────
// WEEK 4 MODULE CONTENT (ADVANCED AUTOMATION AND GRADUATION)
// ─────────────────────────────────────────────────────────────

const module13Content = `## The Leap From Automatic to Intelligent

There is an important distinction between an automation that is automatic and one that is intelligent. An automatic system does the same thing every time, regardless of the context. An intelligent system reads the context and decides what to do based on it. Adding an AI model as a step in your automation workflow is what makes the leap from automatic to intelligent possible.

Here is an analogy. Imagine you have a receptionist who has been given a script: whenever someone comes in, hand them the standard welcome brochure and point them to the waiting room. That is an automatic system - same response every time. Now imagine a receptionist who reads the visitor's intake form, understands whether they are coming for a consultation, a complaint, or a delivery, and responds appropriately to each situation. That is an intelligent system. Adding Claude or ChatGPT to your automation workflow gives it that second kind of intelligence.

## AI-Driven Content Pipelines

One of the most powerful applications of AI automation is the content pipeline: a system where AI generates content on a schedule and automation publishes or distributes it. A practical example: every Monday morning, a Zap pulls your church's upcoming event list from Google Sheets, sends it to Claude with a prompt asking for three social media posts that are engaging and appropriate for a church audience, and then posts the generated content to your Facebook page and Instagram account automatically.

You set this up once. Every week, it runs without your involvement. The content is fresh, relevant, and contextually appropriate - not the same canned message repeated week after week. This kind of pipeline saves hours every week and maintains consistent communication without constant manual effort.

## Intelligent Email Handling

Most organisations receive a significant volume of email that needs to be read, understood, categorised, and responded to. Without automation, someone has to handle every message individually. With AI automation, you can build a system that reads incoming emails, uses Claude to draft appropriate responses based on the content, routes certain messages to the right person, and sends routine replies automatically.

The intelligent element is critical here. A standard auto-reply sends the same message to everyone. An AI-powered system reads what the person actually said and generates a reply that is specific to their message. For a church, this might mean that prayer requests receive a warm, specific acknowledgement; event enquiries receive the relevant details; and donation acknowledgements include a personalised note. All automatically, all appropriately.

## Automated Document Processing

Many organisations deal with a regular flow of documents - applications, registrations, reports, feedback forms - that need to be read, summarised, and acted upon. AI automation can handle this entire process. A document arrives (via email, form, or file upload), the AI reads it and extracts the key information, the extracted information is added to the appropriate database or spreadsheet, a summary is sent to the relevant team member, and a response is sent to the sender. The entire process, which might take fifteen minutes of manual work per document, is completed in seconds.

## Building a FAQ or Enquiry Response Bot

A FAQ bot is an automation that receives a question - via email, a web form, or a messaging platform - reads it using an AI model, matches it to the most relevant answer from your knowledge base, and sends a response automatically. For a church, this could handle common questions about service times, location, events, and registration processes without requiring any manual involvement for routine enquiries.

Building a basic version of this requires combining three things: a form or email inbox that receives questions (the trigger), a Claude or ChatGPT integration that reads the question and generates a contextual answer based on information you provide (the AI step), and a Gmail or messaging integration that sends the response (the action). This is a realistic project for someone at this stage of the programme.`;

const module14Content = `## Church Automations That Make a Real Difference

The most impactful automations for a church are the ones that make members feel genuinely cared for - without requiring the pastoral team to manually manage every interaction. A visitor follow-up automation is typically the highest-value starting point: when a first-time visitor fills in a form after a service, they receive a warm welcome email within minutes, a follow-up reminder goes to the designated care team, and their details are logged for the weekly pastoral report. The visitor feels seen. The team is informed. No one had to do anything manually.

Other high-value church automations include: birthday messages sent automatically to all registered members on their birthday, event reminders sent 48 hours before each programme to all registrants, monthly giving summaries sent automatically to regular donors, and volunteer scheduling confirmations that go out as soon as the schedule is finalised. Each of these runs indefinitely once set up, serving the congregation consistently without consuming staff time.

## Personal Productivity Automations

Beyond ministry, automation can transform personal productivity. A morning briefing automation can deliver a personalised daily summary to your email or phone every morning at 7am - including your calendar events for the day, any new emails that arrived overnight in a specific category, the weather forecast, and a scripture verse. All pulled together and formatted by AI, delivered automatically, before you have even opened a single app.

Task management automations can create new tasks in your task manager automatically when certain emails arrive, when deadlines are approaching, or when specific events occur in your calendar. Expense tracking automations can log receipts automatically when you photograph and email them. The principle is the same in every case: identify a repetitive manual task, describe the desired automation, and build it once.

## Social Media Management

Maintaining a consistent social media presence for a church or organisation requires significant manual effort if done without automation - writing posts, choosing images, scheduling publications, tracking engagement. Automation can handle the scheduling component entirely, and AI can handle the content generation.

A practical workflow: at the start of each week, you spend fifteen minutes adding the week's key messages, events, and announcements to a Google Sheet. An automation reads that sheet, sends the content to Claude with instructions about tone and length, receives the generated posts, and schedules them to publish on the appropriate platforms at the optimal times. Your social media runs itself, with content that is genuinely written for your specific context rather than templated filler.

## Communication at Scale

One of the most time-consuming activities for any organisation is bulk communication - notifying large groups of people about events, changes, or important information. Doing this manually is not only time-consuming but also inconsistent and error-prone. Automation handles it reliably every time.

WhatsApp broadcast automations can send messages to defined groups triggered by specific events. SMS reminder systems can send targeted messages to segments of your contact list based on registration status, location, or engagement history. Newsletter automations can pull content from multiple sources, assemble it into a formatted email, and send it to the full mailing list on a set schedule - all without manual assembly or dispatch. Each of these systems, once built, serves the organisation indefinitely.`;

const module15Content = `## Multi-System Workflows - Connecting Everything Together

The most powerful automations connect five, six, or more applications in a single workflow. A church event management workflow might connect Google Forms (registration), Gmail (confirmation emails), Google Sheets (attendee database), Slack or WhatsApp (team notifications), Google Calendar (event scheduling), and an SMS platform (day-before reminders) - all triggered by a single form submission. Each element feeds into the next, and the entire system operates as a single coherent process.

Building multi-system workflows requires careful planning before building. Map the entire workflow on paper first, identifying every app involved, every data point that needs to move between them, and every condition that might affect the flow. A well-planned multi-system workflow, once built and tested, can replace hours of manual work every week.

## Error Handling - What to Do When Things Break

Automations break. Apps update their authentication methods, form fields change, API connections time out, email quotas are exceeded. A professional automation setup anticipates these failures and handles them gracefully rather than silently failing without anyone noticing.

Most platforms allow you to add error handlers to your workflows - steps that activate when something goes wrong and notify the appropriate person that attention is needed. Setting up a simple notification to your email or phone when any of your key automations fail is a basic but important practice. It means you know about problems when they occur, rather than discovering days later that hundreds of people did not receive the email they were supposed to receive.

## Security and Data Privacy

Automations often handle personal information: names, email addresses, phone numbers, donation amounts, medical or pastoral care details. This creates a responsibility to handle that data appropriately. Consider carefully what information you are routing through which platforms, who has access to the data at each step, whether the platforms you are using comply with relevant data protection requirements, and whether participants have consented to their information being handled this way.

These are not just technical questions - they are ethical ones. A church or organisation that handles personal data carelessly damages trust in ways that are very difficult to repair. Review your automations with these questions in mind, and when in doubt, route less data rather than more.

## Scaling - From Personal Use to Organisational Deployment

An automation you built for yourself to save an hour a week is one thing. An automation that runs for an entire organisation - handling thousands of form submissions, emails, and records - is another level entirely. Scaling requires testing at volume, monitoring for errors, managing API rate limits (the caps that external services place on how many requests you can make per hour), and having a plan for what happens when the automation receives far more input than expected.

Zapier and Make both have paid tiers that support higher volumes. n8n, hosted on your own server, can handle very high volumes without per-task costs. The choice of platform for an organisational deployment depends on the expected volume, the complexity of the workflow, and the technical capacity available to maintain it.

## Commercial Opportunities - Turning These Skills Into Income

The skills developed in this course have genuine commercial value. Automation consulting is a growing field: many businesses and organisations know they need automation but do not have the in-house knowledge to build it. A consultant who can audit their processes, identify automation opportunities, design the workflows, and implement them can charge meaningfully for that service.

Building automation products is another path: identify a problem that a specific type of organisation faces repeatedly, build a turnkey automation solution for it, and offer it as a service. Churches, schools, medical practices, and retail businesses all have common workflow problems that a well-designed automation package can solve. The person who builds that package first and markets it well can turn a one-time build into recurring income.

## The Future of AI Automation

The direction of AI automation points toward fully autonomous agents: AI systems that can be given a high-level goal - 'manage all incoming enquiries for the church this week' - and handle the entire process independently, making decisions, sending responses, escalating when needed, and reporting on outcomes. This level of autonomy is already partially available and will become more capable and accessible over the next two to three years.

The practitioners who understand the fundamentals - how to describe a workflow clearly, how to connect systems, how to test and validate outputs, how to handle errors - will adapt naturally to these more powerful systems. The core skill is not knowing how to use a specific platform. It is knowing how to think about and describe automated processes. That skill does not become obsolete as the tools improve. It becomes more valuable.`;


// ─────────────────────────────────────────────────────────────
// LESSON DEFINITIONS: Reading modules paired with their video
// ─────────────────────────────────────────────────────────────

const week1Lessons = [
  { title: "Module 1: Introduction to Vibe Coding", content: module1Content, videoUrl: "https://www.youtube.com/watch?v=fM_nF84BvOs", duration: "15" },
  { title: "Video: What is Vibe Coding? (Andrej Karpathy)", content: null, videoUrl: "https://www.youtube.com/shorts/JDWK-jHda2Q", duration: "1" },
  { title: "Module 2: Why Vibe Coding Matters Right Now", content: module2Content, videoUrl: "https://www.youtube.com/watch?v=iLCDSY2XX7E", duration: "15" },
  { title: "Module 3: Foundations - Thinking Like a Builder", content: module3Content, videoUrl: "https://www.youtube.com/watch?v=-VuZmoc-Sq8", duration: "15" },
  { title: "Module 4: Tools and Platforms for Vibe Coding", content: module4Content, videoUrl: "https://www.youtube.com/watch?v=faezjTHA5SU", duration: "15" },
  { title: "Video: Cursor Vibe Coding Tutorial for Beginners", content: null, videoUrl: "https://www.youtube.com/watch?v=8AWEPx5cHWQ", duration: "25" },
];

const week2Lessons = [
  { title: "Module 5: Effective Prompt Engineering", content: module5Content, videoUrl: "https://www.youtube.com/watch?v=I1MEiaG0vW4", duration: "15" },
  { title: "Video: Prompt Engineering Guide - Beginner to Advanced", content: null, videoUrl: "https://www.youtube.com/watch?v=uDIW34h8cmM", duration: "20" },
  { title: "Module 6: Building and Deploying a First Project", content: module6Content, videoUrl: "https://www.youtube.com/watch?v=BQxhJ5Nxooc", duration: "15" },
  { title: "Module 7: Intermediate Development Techniques", content: module7Content, videoUrl: "https://www.youtube.com/watch?v=7HErPVFNO0Q", duration: "15" },
  { title: "Module 8: Advanced Vibe Coding Practices", content: module8Content, videoUrl: "https://www.youtube.com/watch?v=96jN2OCOfLs", duration: "15" },
  { title: "Video: Cursor Vibe Coding Tutorial (Revisited)", content: null, videoUrl: "https://www.youtube.com/watch?v=8AWEPx5cHWQ", duration: "25" },
];

const week3Lessons = [
  { title: "Module 9: Introduction to AI Automation", content: module9Content, videoUrl: "https://www.youtube.com/watch?v=h6euNY9-7dA", duration: "15" },
  { title: "Module 10: Types of AI Automation", content: module10Content, videoUrl: "https://www.youtube.com/watch?v=0QNGZsYqqg0", duration: "15" },
  { title: "Module 11: Automation Platforms and Tools", content: module11Content, videoUrl: "https://www.youtube.com/watch?v=avQMU1yJkyY", duration: "15" },
  { title: "Module 12: Designing and Deploying Your First Automation", content: module12Content, videoUrl: "https://www.youtube.com/watch?v=CLutx-rqGgc", duration: "15" },
  { title: "Video: Week 3 Additional Resource", content: null, videoUrl: "https://www.youtube.com/watch?v=DS4QbTpbVKw", duration: "20" },
];

const week4Lessons = [
  { title: "Module 13: Integrating AI into Automation Workflows", content: module13Content, videoUrl: "https://www.youtube.com/watch?v=PfdnYe2690E", duration: "15" },
  { title: "Module 14: Automation for Ministry and Personal Contexts", content: module14Content, videoUrl: "https://www.youtube.com/watch?v=bKX8t3QA04s", duration: "15" },
  { title: "Module 15: Advanced Automation and Professional Development", content: module15Content, videoUrl: "https://www.youtube.com/watch?v=7_PeuTsx7UM", duration: "15" },
  { title: "Video: Week 4 Additional Resource 1", content: null, videoUrl: "https://www.youtube.com/watch?v=jCWPqTDgplk", duration: "20" },
  { title: "Video: Week 4 Additional Resource 2", content: null, videoUrl: "https://www.youtube.com/watch?v=SVkiqiSVo3k", duration: "20" },
];


// ─────────────────────────────────────────────────────────────
// MAIN SEED FUNCTION
// ─────────────────────────────────────────────────────────────

async function main() {
  console.log('Seeding courses...');

  const startDate = new Date('2026-07-04T12:00:00Z'); // July 4th, 2026

  // Helper to get dates for a given week offset (week 0, 1, 2, 3)
  const getDatesForWeek = (weekOffset: number) => {
    const dates = [];
    const baseDate = new Date(startDate);
    baseDate.setDate(baseDate.getDate() + (weekOffset * 7));
    
    // Saturday (Day 0 of our week)
    dates.push(new Date(baseDate));
    
    // Monday to Friday (Days 2 to 6)
    for (let i = 2; i <= 6; i++) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  const vibeWeek1Dates = getDatesForWeek(0); // July 4, July 6-10
  const vibeWeek2Dates = getDatesForWeek(1); // July 11, July 13-17
  
  const autoWeek1Dates = getDatesForWeek(2); // July 18, July 20-24
  const autoWeek2Dates = getDatesForWeek(3); // July 25, July 27-31

  // ═══════════════════════════════════════════════════════════
  // COURSE 1: VIBECODING (Weeks 1-2, Modules 1-8)
  // ═══════════════════════════════════════════════════════════
  console.log('\n── COURSE 1: Vibecoding ──');

  const vibeCourse = await prisma.course.findFirst({
    where: { title: { contains: "Vibecoding", mode: "insensitive" } }
  });

  let vibeCourseId = vibeCourse?.id;

  if (vibeCourseId) {
    console.log('Found existing Vibecoding course:', vibeCourse!.title);
    await prisma.course.update({
      where: { id: vibeCourseId },
      data: {
        title: 'Vibecoding',
        description: 'Learn to build software by describing what you want in everyday language. From complete beginner to confident builder in two weeks.',
        level: 'Beginner',
        duration: '2 weeks',
      }
    });
    await prisma.lesson.deleteMany({ where: { courseId: vibeCourseId } });
    await prisma.liveSession.deleteMany({ where: { courseId: vibeCourseId } });
    await prisma.assignment.deleteMany({ where: { courseId: vibeCourseId } });
    await prisma.quiz.deleteMany({ where: { courseId: vibeCourseId } });
    await prisma.exam.deleteMany({ where: { courseId: vibeCourseId } });
  } else {
    console.log('Creating Vibecoding course...');
    const newCourse = await prisma.course.create({
      data: {
        title: 'Vibecoding',
        description: 'Learn to build software by describing what you want in everyday language. From complete beginner to confident builder in two weeks.',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        category: 'Tech',
        instructor: 'Church Technology Class',
        level: 'Beginner',
        duration: '2 weeks',
        price: 0,
      }
    });
    vibeCourseId = newCourse.id;
  }

  let vibeOrder = 1;
  console.log('Seeding Week 1 lessons...');
  for (const lesson of week1Lessons) {
    await prisma.lesson.create({
      data: { title: lesson.title, content: lesson.content, videoUrl: lesson.videoUrl, duration: lesson.duration, order: vibeOrder++, courseId: vibeCourseId! }
    });
  }
  console.log('Seeding Week 2 lessons...');
  for (const lesson of week2Lessons) {
    await prisma.lesson.create({
      data: { title: lesson.title, content: lesson.content, videoUrl: lesson.videoUrl, duration: lesson.duration, order: vibeOrder++, courseId: vibeCourseId! }
    });
  }

  const generateLiveSessions = (dates: Date[], weekNum: number, courseId: string) => {
    return dates.map((date, index) => {
      const isSaturday = date.getDay() === 6;
      const typeLabel = isSaturday ? 'Physical Class' : 'WhatsApp Call';
      const dayNum = index === 0 ? 1 : index + 1;
      
      return {
        title: `Week ${weekNum} - Day ${dayNum} (${typeLabel})`,
        description: isSaturday ? `In-person practical session at 12 PM.` : `Daily sync and check-in via WhatsApp at 12 PM.`,
        date,
        duration: isSaturday ? "2 Hours 30 Minutes" : "1 Hour",
        instructor: "Church Technology Class",
        link: isSaturday ? "In-Person" : "WhatsApp Group",
        secretCode: null, // Codes will be generated by Admin
        courseId
      };
    });
  };

  await prisma.liveSession.deleteMany({ where: { courseId: vibeCourseId! } });

  await prisma.liveSession.createMany({
    data: [
      ...generateLiveSessions(vibeWeek1Dates, 1, vibeCourseId!),
      ...generateLiveSessions(vibeWeek2Dates, 2, vibeCourseId!),
    ]
  });

  // Helper to create assignment for a module
  async function seedAssignmentsForModule(courseId: string, titlePattern: string, assignTitle: string, assignDesc: string, dueDate: Date) {
    const lesson = await prisma.lesson.findFirst({
      where: { courseId, title: { contains: titlePattern } }
    });
    if (lesson) {
      await prisma.assignment.create({
        data: {
          title: assignTitle,
          description: assignDesc,
          dueDate,
          courseId,
          lessonId: lesson.id
        }
      });
    }
  }

  console.log('Seeding Vibecoding Assignments...');
  await seedAssignmentsForModule(vibeCourseId!, 'Module 1', 'Explain Vibe Coding in Your Own Words', 'Write a short paragraph explaining what vibe coding is as if you were explaining it to a non-technical friend.', vibeWeek1Dates[0]);
  await seedAssignmentsForModule(vibeCourseId!, 'Module 2', 'Identify a Problem Worth Solving', 'Describe a manual, time-consuming task you or your organization faces that could be solved by a custom app.', vibeWeek1Dates[0]);
  await seedAssignmentsForModule(vibeCourseId!, 'Module 3', 'Define Your First Project', 'Write a clear, specific outcome statement for a simple project you want to build this week.', vibeWeek1Dates[0]);
  await seedAssignmentsForModule(vibeCourseId!, 'Module 4', 'Set Up Your Tools', 'Create an account on Claude or Cursor. Submit a screenshot or link of your first conversation with the AI.', vibeWeek1Dates[0]);
  await seedAssignmentsForModule(vibeCourseId!, 'Module 5', 'Write Two Prompts: Vague vs Specific', 'Write a vague prompt for your project, then write a highly specific, effective version of the same prompt. Compare them.', vibeWeek2Dates[0]);
  await seedAssignmentsForModule(vibeCourseId!, 'Module 6', 'Build and Publish a Webpage', 'Use vibe coding to build your first working webpage and publish it. Submit the deployed project URL.', vibeWeek2Dates[0]);
  await seedAssignmentsForModule(vibeCourseId!, 'Module 7', 'Add an Interactive Feature', 'Add a button, form, or interactive element to your webpage. Submit the updated URL and explain what you added.', vibeWeek2Dates[0]);
  await seedAssignmentsForModule(vibeCourseId!, 'Module 8', 'Build Something for Someone Else', 'Build a simple app or page for another person or your church. Submit the URL and describe who it is for.', vibeWeek2Dates[0]);

  console.log('Vibecoding course seeded!');

  // ═══════════════════════════════════════════════════════════
  // COURSE 2: AI AUTOMATION (Weeks 3-4, Modules 9-15)
  // ═══════════════════════════════════════════════════════════
  console.log('\n── COURSE 2: AI Automation ──');

  const autoCourse = await prisma.course.findFirst({
    where: { title: { contains: "AI Automation", mode: "insensitive" } }
  });

  let autoCourseId = autoCourse?.id;

  if (autoCourseId) {
    console.log('Found existing AI Automation course:', autoCourse!.title);
    await prisma.course.update({
      where: { id: autoCourseId },
      data: { instructor: 'Mr Johnwell' }
    });
    await prisma.lesson.deleteMany({ where: { courseId: autoCourseId } });
    await prisma.liveSession.deleteMany({ where: { courseId: autoCourseId } });
    await prisma.assignment.deleteMany({ where: { courseId: autoCourseId } });
    await prisma.quiz.deleteMany({ where: { courseId: autoCourseId } });
    await prisma.exam.deleteMany({ where: { courseId: autoCourseId } });
  } else {
    console.log('Creating AI Automation course...');
    const newCourse = await prisma.course.create({
      data: {
        title: 'AI Automation',
        description: 'Learn to build intelligent automations that save hours of manual work every week. From simple task automation to advanced AI-powered workflows.',
        thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
        category: 'Tech',
        instructor: 'Mr Johnwell',
        level: 'Intermediate',
        duration: '2 weeks',
        price: 0,
      }
    });
    autoCourseId = newCourse.id;
  }

  let autoOrder = 1;
  console.log('Seeding Week 3 lessons...');
  for (const lesson of week3Lessons) {
    await prisma.lesson.create({
      data: { title: lesson.title, content: lesson.content, videoUrl: lesson.videoUrl, duration: lesson.duration, order: autoOrder++, courseId: autoCourseId! }
    });
  }
  console.log('Seeding Week 4 lessons...');
  for (const lesson of week4Lessons) {
    await prisma.lesson.create({
      data: { title: lesson.title, content: lesson.content, videoUrl: lesson.videoUrl, duration: lesson.duration, order: autoOrder++, courseId: autoCourseId! }
    });
  }

  await prisma.liveSession.deleteMany({ where: { courseId: autoCourseId! } });

  await prisma.liveSession.createMany({
    data: [
      ...generateLiveSessions(autoWeek1Dates, 3, autoCourseId!),
      ...generateLiveSessions(autoWeek2Dates, 4, autoCourseId!),
    ]
  });

  console.log('Seeding AI Automation Assignments...');
  await seedAssignmentsForModule(autoCourseId!, 'Module 9', 'Identify Three Automatable Tasks', 'List three tasks you perform regularly that are repetitive, manual, and could potentially be automated.', autoWeek1Dates[0]);
  await seedAssignmentsForModule(autoCourseId!, 'Module 10', 'Map a Manual Workflow', 'Pick one task from the previous assignment and write down every single step required to complete it manually.', autoWeek1Dates[0]);
  await seedAssignmentsForModule(autoCourseId!, 'Module 11', 'Create Your Zapier Account', 'Create a free Zapier account and link it to your most used work email. Describe any issues you faced.', autoWeek1Dates[0]);
  await seedAssignmentsForModule(autoCourseId!, 'Module 12', 'Build a Form-to-Email Automation', 'Build the Google Forms to Gmail automation. Submit a screenshot or link of your active Zap.', autoWeek1Dates[0]);
  await seedAssignmentsForModule(autoCourseId!, 'Module 13', 'Build an AI-Powered Automation', 'Add an AI step (like Claude or ChatGPT) to your automation. Describe what it does.', autoWeek2Dates[0]);
  await seedAssignmentsForModule(autoCourseId!, 'Module 14', 'Design a Church Automation', 'Design a workflow specifically for ministry or church use. Write a detailed plan of the triggers, actions, and filters.', autoWeek2Dates[0]);
  await seedAssignmentsForModule(autoCourseId!, 'Module 15', 'Final Showcase Preparation', 'Prepare your final project for presentation. Submit the URL (if applicable) and a summary of what you will present.', autoWeek2Dates[0]);

  console.log('AI Automation course seeded!');
  console.log('\nAll courses seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

