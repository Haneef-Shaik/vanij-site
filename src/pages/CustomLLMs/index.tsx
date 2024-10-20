import AdiComparison from "./AdiComparison";
import FAQs from "./FAQs";
import FirstBlock from "./FirstBlock";
import LLMSelector from "./LLMSelector";
import Ready from "./Ready";

export default function CustomLLMs() {
    return (
      <div>
        <FirstBlock />
        <LLMSelector />
        <AdiComparison />
        <FAQs />
        <Ready />
      </div>
    );
  }
  