import CardTicket from "./components/cardTicket";
import TableTicket from "./components/tableTicket";
import Ticket from "./components/ticket";

const Tickets = () => {
    return (
       <section className="flex flex-col gap-2 md:gap-5 mt-1 md:mt-5">
        <Ticket />
        <CardTicket />
        <TableTicket />
       </section>
    );
};

export default Tickets;