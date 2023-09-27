import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localstorage";

const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    console.log(donation)

    const handleDonation = () => {
        saveDonation(idInt);
        toast('You Have Donation Successfully!');
    }
    return (
        <div>
            <h2>Donation Details</h2>
            <div>
                <img className="w-full" src={donation.img} alt="" />
                <div>
                    <button onClick={handleDonation} className="btn btn-primary">Donation</button>
                </div>
                <div>
                    <h1>{donation.title}</h1>
                    <p>{donation.description_details}</p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DonationDetails;