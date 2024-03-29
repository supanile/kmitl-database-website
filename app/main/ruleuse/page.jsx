import styles from "@/app/ui/main/ruleuse/ruleuse.module.css";
import Image from "next/image";

const RuleusePage = () => {
  return (
    <div className={styles.container}>
      <div className="flex items-center justify-center gap-5 mt-1 ml-[-200px]">
        <Image className="object-cover" src="/ruletouse.png" alt="" width={1010} height={683} />
      </div>
    </div>
  );
};

export default RuleusePage;
