import IncreaseCredit from "./components/increaseCredit";
import Inventory from "./components/inventory";
import PrevTransactions from "./components/prevTransactions";

const Wallet = () => {
    return(
        <section className="flex flex-col gap-2 md:gap-5 mt-1 md:mt-5">
            <Inventory />
            <IncreaseCredit />
            <PrevTransactions />
        </section>
    );
};

export default Wallet;