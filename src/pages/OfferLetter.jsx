



let firstname = alert("Enter your first name");

const OfferLetter = () => {
  return (
    <div className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
       
        <p> Hi {firstname} We are thrilled to announce that you are selected <br> For our program</br></p>
        
      </div>
    </div>
  );
};

export default OfferLetter;
