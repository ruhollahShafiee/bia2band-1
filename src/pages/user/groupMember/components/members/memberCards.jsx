import img from "../../test.jpg";
const MemberCards = ({ id }) => {
    return (
        <div className="flex flex-col" key={id}>
            <img  src={img} id={`image-${id}`} className="rounded-full size-28 justify-center p-5" />
        </div>
    )
}

export default MemberCards;