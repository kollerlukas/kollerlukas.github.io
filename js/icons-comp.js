/* register vuejs svg icon component */
Vue.component('svg-icon', {
    props: ['svg'],
    template: `
        <span :class="svg.class" :title="svg.title">
            <svg :width="svg.width" :height="svg.height" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path v-for="path in svg.paths" :d="path.path" :fill="path.fill" :fill-opacity="path.opacity" />
            </svg>
        </span>
    `,
    data: function () {
        return icons
    }
})