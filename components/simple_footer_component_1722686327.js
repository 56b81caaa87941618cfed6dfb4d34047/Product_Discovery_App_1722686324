/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722686327", {
    template: `
    <footer id="footer-section" class="flex-1 bg-purple-900 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
            <div id="footer-container" class="max-w-screen-xl p-6 py-8 mx-auto lg:py-16 md:p-10 lg:p-12">
                <hr id="footer-divider" class="my-6 border-magenta-300 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-magenta-200 hover:text-magenta-100 transition-colors duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10" alt="Landwind Logo" />
                            DiscoverNow
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-purple-200 hover:text-purple-100 transition-colors duration-300">
                        © 2023 DiscoverNow. Uncover the latest and greatest products at your fingertips.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
