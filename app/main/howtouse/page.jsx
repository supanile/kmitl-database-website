import Image from "next/image";
import styles from '@/app/ui/main/howtouse/howtouse.module.css'

const HowtousePage = () => {
  return (
    <div className={styles.container}>
      <div className="flex items-center justify-center gap-5 mt-5">
        <Image className="rounded-lg shadow-2xl" src="/htu.png" alt="" width={504} height={713} />
      </div>
    </div>
  );
};

export default HowtousePage;
