

const SingleImages = ({toy}) => {
    const {  title, picture } = toy;
    return (
        <div className="rounded-xl shadow-lg w-[300px] h-[330px]">
        <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
                <img className="h-40 w-full" src={picture} alt="" />
            </div>
            <div className="">
                <h5 className="text-2xl md:text-3xl font-medium mt-5 mb-3"> Toy Car Name: {title}</h5>
              
            </div>
    

        </div>
    </div>
    );
};

export default SingleImages;