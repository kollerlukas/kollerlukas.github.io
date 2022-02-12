/* global Vue, myApps, icons */

/* init VueJs app */
new Vue({
    el: "#app",
    components: {
        /* register local svg-icon component */
        "svg-icon": {
            props: ["svg"],
            template: '<span :class="svg.class" :title="svg.title"><svg :width="svg.width" :height="svg.height" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path v-for="path in svg.paths" :d="path.path" :fill="path.fill" :fill-opacity="path.opacity" /></svg></span>'
        }
    },
    data: {
        /* set apps data from myapps.js */
        /* jslint es6 */
        myApps: myApps,
        /* set icons data from icons.js */
        /* jslint es6 */
        icons: icons,
    },
});