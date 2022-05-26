import React from 'react';
import l1 from '../../Assets/customer-logo/c1.png';
import l2 from '../../Assets/customer-logo/c2.png';
import l3 from '../../Assets/customer-logo/c3.png';
import l4 from '../../Assets/customer-logo/c4.png';
import l5 from '../../Assets/customer-logo/c5.png';
import l6 from '../../Assets/customer-logo/c6.png';
import l7 from '../../Assets/customer-logo/c7.png';

function ClientsLogo() {
    return (
        <section className="hidden bg-[#f9f9f9] md:block">
            <div className="container mx-auto flex flex-col py-16 md:py-32">
                <div className="customer-logo mb-6 flex flex-wrap items-center justify-between space-x-2 space-y-2">
                    <img src={l1} alt="" />
                    <img src={l2} alt="" />
                    <img src={l3} alt="" />
                    <img src={l4} alt="" />
                </div>
                <div className="customer-logo mt-6 flex flex-wrap items-center justify-between space-x-2 space-y-2">
                    <img src={l5} alt="" />
                    <img src={l6} alt="" />
                    <img src={l7} alt="" />
                </div>
            </div>
        </section>
    );
}

export default ClientsLogo;
