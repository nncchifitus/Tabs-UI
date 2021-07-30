const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const line = $$('.tabs .line')[0]
const tabActive = $$('.tab-item.active')[0]

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';
// console.log(line)



tabs.forEach(function(tab, index) {
    tab.onclick = function() {

        $$('.tab-item.active')[0].classList.remove('active')
        $$('.tab-pane.active')[0].classList.remove('active')

        tab.classList.add('active')
        panes[index].classList.add('active')

        line.style.width = tab.offsetWidth + 'px'
        line.style.left = tab.offsetLeft + 'px'
    }
})
