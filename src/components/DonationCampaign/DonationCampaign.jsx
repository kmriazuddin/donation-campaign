import { Link } from "react-router-dom";

const DonationCampaign = ({ donations }) => {
    const { id, img, title, description } = donations;
    return (
        <div className="max-w-6xl mx-auto">
            <Link to={`/donations/${id}`}>
                <button>
                    <div className="card card-compact bg-base-100 rounded shadow-xl">
                        <figure><img className="w-64" src={img} alt="img" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p className="text-start">{description}</p>
                        </div>
                    </div>
                </button>
            </Link>
        </div>
    );
};

export default DonationCampaign;