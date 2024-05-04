import Timeflow from "@/components/Timeflow";
const KalenderPage = () => {
  return (
    <section class="max-w-screen-md w-[90%] mb-[4.5rem] mx-auto mt-[100px]">
      <h2 class="text-4xl mb-4 font-medium font-['Open_Sans'] border-b-2 pb-2 border-blue-400">
        Agenda Hari ini
      </h2>

      <Timeflow/>

      <h2 class="text-4xl mb-4 font-medium font-['Open_Sans'] border-b-2 pb-2 border-blue-400">
        Agenda Minggu Ini
      </h2>

      <Timeflow/>

      <h2 class="text-4xl mb-4 font-medium font-['Open_Sans'] border-b-2 pb-2 border-blue-400">
        Agenda Bulan Ini
      </h2>

      <Timeflow/>

      
    </section>
  );
};

export default KalenderPage;
