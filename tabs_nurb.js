
const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')
  
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tabValue;
            tabInfos.forEach(tabInfo => {
                tabInfo.classList.remove('tabs-content--active')
            })
            document.getElementById(target).classList.add('tabs-content--active')
     })
})


