import '../../../scss/components/pages/home/filter-slider.scss';
/*----------------Tab Content--------------------*/

window.addEventListener("load", () => {
    const tabs = document.querySelectorAll("[tab_content_title2]");
    const content = document.querySelectorAll("[tab_content_item2]");

    if (tabs && content) {

        for (let i = 0; i < tabs.length; i++) {
            tabs[0].click()
            tabs[0].classList.add('active')

            tabs[i].addEventListener("click", () => {
                tabs.forEach((item) => {
                    item.classList.remove("active");
                });
                tabs[i].classList.add("active");

                const contentId = tabs[i].getAttribute("tab_content_title2");

                content.forEach((item) => {
                    item.classList.remove("active");
                });

                const element = document.querySelector(
                    `[tab_content_item2="${contentId}"]`
                );
                element.classList.add("active");
            });
        }
    }
});
