import FurtherInformation from "./components/furtherinformation";
import Members from "./components/members";

const GroupMember = () => {
    return(
        <section className="flex flex-col md:gap-5 gap-2 md:mt-5 mt-1">
            <Members />
            <FurtherInformation />
        </section>
    )
}

export default GroupMember;