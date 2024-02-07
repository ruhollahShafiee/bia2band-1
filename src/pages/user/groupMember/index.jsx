import FurtherInformation from "./components/furtherinformation";
import Members from "./components/members";

const GroupMember = () => {
    return(
        <section className="flex flex-col gap-5 mt-5">
            <Members />
            <FurtherInformation />
        </section>
    )
}

export default GroupMember;