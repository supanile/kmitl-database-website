import styles from "./information.module.css";

const Information = () => {
  return (
    <div className={styles.container}>
      <div className="absolute top-[248px] left-[535px] w-[867px] h-[556px] text-[#3e3e3e]">
        <div className={styles.centerBoxChild} />
        <div className="absolute top-[20px] left-[260px] font-medium inline-block w-[347px] h-[50px]">ชื่อ-นามสกุล</div>
        <div className="absolute top-[70px] left-[260px] font-light inline-block w-[347px] h-[50px]">รหัสนักศึกษา</div>
        <div className="absolute left-[260px] font-light inline-block w-[347px] h-[50px] top-[120px]">64050XXX</div>
        <div className={styles.centerBoxItem} />
        <div className={styles.centerBoxInner} />
        <div className={styles.rectangleDiv} />
        <div className="absolute top-[211px] left-[77px] font-medium text-white text-left inline-block w-[200px] h-[50px]">ชั้นปี :</div>
        <div className={styles.fac}>คณะ : วิทยาศาสตร์</div>
        <div className={styles.major}>สาขา :</div>
      </div>
    </div>
  );
};

export default Information;
