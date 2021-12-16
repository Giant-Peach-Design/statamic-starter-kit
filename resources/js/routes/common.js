import Headroom from "headroom.js";
import MicroModal from "micromodal";
import InView from "../components/InView";

export default {
    init() {
        console.log("common :: init");

        const header = document.querySelector(".header");
        if (header) {
            const headroom = new Headroom(header, {
                offset: 164,
            });
            headroom.init();
        }

        InView(".reveal");

        MicroModal.init({
            awaitCloseAnimation: true,
            disableScroll: true,
            onShow: (modal) => {
                window.dispatchEvent(
                    new CustomEvent("ModalOpen", { detail: { modal } })
                );
            },
        });

        if (document.querySelector("[data-banner]")) {
            import("../components/Banner").then((Banner) => {
                Banner.default();
            });
        }
    },
    finalize() {
        console.log("common :: finalize");
        Alpine.start();
    },
};
