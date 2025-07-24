import MarkDownRenderer from "@/components/MarkDownRenderer";
import Image from "next/image";
import React from "react";

const page = () => {
  const myMarkdownText = `
  # test
**The Allure of Hoax Technologies**  
Hoax technologies captivate the public by exploiting our fascination with groundbreaking advancements. These fabricated or exaggerated claims about devices, software, or systems promise revolutionary capabilities but ultimately fail to deliver. From historical scams like the 19th-century "Keely Motor," which falsely claimed to harness free energy, to modern fake AI breakthroughs, hoax technologies blend overzealous marketing, misinformation, and outright fraud. They prey on curiosity and trust, offering solutions that seem too good to be true—because they are. Today’s digital landscape, with its viral reach, amplifies these deceptions, making them more pervasive and persuasive than ever before.

**The Mechanics of Deception**  
Hoax technologies rely on polished presentations and pseudoscientific jargon to appear legitimate. Creators craft convincing narratives using slick websites, staged demos, or manipulated data to mislead investors and consumers. A notorious example is the early 2000s "ITBox," a supposed supercomputer revealed to be a hollow shell with blinking lights. Social media platforms, particularly through viral marketing, accelerate the spread of these hoaxes, as sensational claims rack up attention before scrutiny can catch up. The general public’s limited technical expertise creates a gap that fraudsters exploit, cloaking their schemes in a veneer of credibility that’s difficult to challenge without specialized knowledge.

**The Consequences of Belief**  
The impact of hoax technologies extends beyond financial losses to erode trust in legitimate innovation. High-profile cases like Theranos, which falsely claimed to revolutionize blood testing, led to millions in losses and legal battles after its deception was exposed. Such hoaxes foster skepticism toward genuine scientific advancements, slowing progress in critical fields like renewable energy or medical technology. Resources wasted on fake solutions can delay real-world applications, such as climate change mitigation or healthcare improvements. The ripple effect undermines confidence in technology, making it harder for authentic innovators to gain traction.

**Modern Examples and Red Flags**  
Today’s hoax technologies often hide behind trendy buzzwords like "quantum," "blockchain," or "AI-driven." Fake AI tools claiming to predict stock markets with perfect accuracy, for instance, lure users into subscription traps or data theft schemes. Dubious gadgets, like "health bands" promoted on platforms like X for curing diseases through vague "frequency therapy," are frequently debunked by experts. Red flags include unrealistic promises, lack of peer-reviewed evidence, and secretive claims that resist independent verification. Recognizing these signs—overhyped benefits, missing prototypes, or unverifiable endorsements—is essential for avoiding deception in an era of flashy tech scams.

**Combating Hoax Technologies**  
Countering hoax technologies demands a mix of education, skepticism, and stronger regulation. Public awareness campaigns can equip consumers to question extraordinary claims and seek credible evidence. Platforms like X can amplify expert voices to debunk misinformation but must also limit the spread of deceptive tech ads. Regulatory bodies should enforce stricter oversight of tech startups, particularly those seeking public investment, to ensure transparency. Promoting open-source validation and peer review can expose fraudulent claims early. By fostering critical thinking and a culture of evidence-based scrutiny, society can better navigate the deceptive allure of hoax technologies, preserving trust in genuine innovation.
`;

  return (
    <main className="px-8 my-5">
      <section className="flex flex-col gap-8">
        <Image
          height={500}
          width={500}
          src={"/images/js.png"}
          alt="Banner"
          className=" rounded-3xl object-cover object-center"
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
              <p className="text-xs font-semibold text-black/40">Junior Dev</p>
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
    </main>
  );
};

export default page;
