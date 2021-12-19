export default function ServiceCard() {
    return (
        <div className="col-lg-4">
            <div className="card-service wow fadeInUp">
                <div className="header">
                    <img src="../assets/img/services/service-1.svg" alt="" />
                </div>
                <div className="body">
                    <h5 className="text-secondary">SEO Consultancy</h5>
                    <p>We help you define your SEO objective & develop a realistic strategy with you</p>
                    <a href="service.html" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
}