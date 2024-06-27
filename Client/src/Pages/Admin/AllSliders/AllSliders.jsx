import React from 'react';
import { Link } from 'react-router-dom';

const AllSliders = () => {
    // Массив данных о слайдерах (заглушка)
    const sliders = [
        { id: 1, title: "Sale Slider", link: "/admin/saleslider" },
        { id: 2, title: "Comments Slider", link: "/admin/commentslider" },
        { id: 3, title: "Blog Slider", link: "/admin/blog" },
    ];

    return (
        <div className="container">
            <h2 className="mt-4 mb-3">Slider management</h2>
            <div className="row">
                {sliders.map(slider => (
                    <div key={slider.id} className="col-lg-3 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">{slider.title}</h4>
                                <p className="card-text">Add, change or delete data</p>
                            </div>
                            <div className="card-footer">
                                <Link to={slider.link} className="btn btn-primary">Go to settings</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllSliders;
