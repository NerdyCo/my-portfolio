import Card from "@/components/WideCard";
import MarkDownRenderer from "@/components/MarkDownRenderer";
import Image from "next/image";
import React from "react";
import SuggestionCard from "@/components/SuggestionCard";

const page = () => {
  const myMarkdownText = `
Artificial Intelligence (AI) has come a long way — but now, it's not just about smart speakers or chess bots. In 2025, **AI Agents** are making waves by becoming *everyday assistants* inside our favorite apps. 💡
From chat apps to shopping platforms, these tiny virtual brains are transforming how we interact with software. Let’s dive into how this works and why it’s such a big deal.

## 🚀 What Are AI Agents?

AI Agents are like mini-AIs that can act *autonomously* inside applications. They can:

- Understand your goals or tasks 🤔
- Make decisions and take actions 🛠️
- Learn from interactions and improve over time 📈

Think of them as "little ChatGPTs" trained specifically to do one thing *really well* inside your app.

## 📱 Real-World Examples in 2025

Here are a few places where AI agents are popping up:

### 1. **Messaging Apps**
Apps like WhatsApp and Telegram now include smart agents that:
- Suggest replies ✍️
- Schedule meetings automatically 📆
- Translate conversations on-the-fly 🌐

### 2. **E-commerce Platforms**
On sites like Amazon or Tokopedia:
- AI agents recommend products based on behavior 🛍️
- Help with returns or delivery tracking 📦
- Chat support is now *fully autonomous* 🤯

### 3. **Productivity Tools**
Apps like Notion, Obsidian, and even VSCode have AI agents that:
- Write documentation 📝
- Refactor code 🧠
- Manage daily to-dos ✅

## 🧠 How Do They Work?

Most AI agents are powered by **Large Language Models (LLMs)** like GPT-4 or Claude, combined with:

- **Memory** to track context and user preferences
- **APIs** to interact with external services (e.g., your calendar or email)
- **Rules or goals** that guide their behavior

It’s like giving your app a *brain, memory, and hands* to do stuff for you!

## 🛑 Risks & Challenges

While cool, AI agents also bring risks:

- **Privacy concerns** — they often need access to sensitive data 🔐
- **Over-automation** — what if the agent misinterprets something? ⚠️
- **Bias & fairness** — agents must be well-trained to avoid harmful behavior 🙅‍♂️

Developers must be responsible and transparent when integrating agents.

## 🔮 The Future: AI That Feels Personal

In the near future, your AI agent might know you *better than your friends do*. Whether you're coding, shopping, or just chatting, you'll have a personal assistant that *feels like magic*. 🧙‍♂️✨

> *“The best interface is no interface — just an AI that gets you.”*

## 👨‍💻 Final Thoughts

AI agents aren’t just a trend — they’re becoming the **default way** we interact with apps. If you're a developer, this is the *next frontier*. If you're a user, get ready to work smarter, not harder. 😉

*Written by: Kautsar Teguh Dwi Putra 🧑‍💻  
July 24, 2025*


 `;

  return (
    <main className="px-8 my-10 flex flex-col gap-8">
      <div>
        <section className="flex flex-col gap-8">
          <Image
            height={500}
            width={500}
            src={"/images/js.png"}
            alt="Banner"
            className="rounded-3xl object-cover object-center"
          />
          <h1 className="text-2xl font-bold text-black/80">
            Hoax Detection System Using Machine Learning
          </h1>
        </section>
        <section>
          <div className="my-7 px-1 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3 mt-1">
              <Image
                height={48}
                width={48}
                src={"/images/avatar.jpg"}
                alt="Profile Picture"
                className="rounded-full object-cover object-center"
              />
              <div className="flex flex-col gap-0.5 justify-center">
                <h6 className="text-sm font-semibold text-black/55">Thesis</h6>
                <p className="text-xs font-semibold text-black/40">
                  Junior Dev
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-black/40">
                Feb - Mar, 2019
              </p>
            </div>
          </div>
          <div className="my-7">
            <MarkDownRenderer markdown={myMarkdownText} />
          </div>
        </section>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Other Projects</h3>
        <div className="flex flex-col gap-3">
          <SuggestionCard />
          <SuggestionCard />
        </div>
      </div>
    </main>
  );
};

export default page;
