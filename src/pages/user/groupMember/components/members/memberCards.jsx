import img from "../../test.jpg";
const MemberCards = ({ id }) => {
    return (
        <div className="flex flex-col" key={id}>
            <img src={img} id={`image-${id}`} className="rounded-full size-20" />
        </div>
    );
};

export default MemberCards;