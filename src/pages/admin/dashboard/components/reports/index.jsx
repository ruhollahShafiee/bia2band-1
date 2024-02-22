import AlertSection from "./components/alertSection";
import CardsReport from "./components/cardsReport";
import Chart from "./components/chart";

const Reports = () => {
    return (
        <section className="flex flex-col gap-2 md:gap-5 mt-1 md:mt-5">
            <AlertSection />
            <CardsReport />
            <Chart />
        </section>
    );
};

export default Reports;