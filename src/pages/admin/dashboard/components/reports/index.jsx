import AlertSection from "./components/alertSection";
import CardsReport from "./components/cardsReport";
import Chart from "./components/chart";

const Reports = () => {
    return (
        <section className="flex flex-col gap-5">
            <AlertSection />
            <CardsReport />
            <Chart />
        </section>
    );
};

export default Reports;