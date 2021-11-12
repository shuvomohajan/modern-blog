/* eslint-disable jsx-a11y/anchor-is-valid */

import refa from '../images/refa.jpg';
import shuvo from '../images/shuvo.jpg';
import sanjoy from '../images/sanjoy.jpg';
import TeamMember from './TeamMember';

export default function Footer() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl font-medium title-font mb-4 text-red-600">OUR TEAM</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div class="flex flex-wrap -m-4 justify-center">
                    <TeamMember name="Shuvo Mohajon" img={shuvo} />
                    <TeamMember name="Refayet Ullah Siddique" img={refa} />
                    <TeamMember name="Sanjoy Kumar Dhar" img={sanjoy} />
                </div>
            </div>
        </section>
    );
}