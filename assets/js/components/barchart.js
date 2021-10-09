const barchart = () => {   
    const skillsInfo = [
        {code: 'html', name: 'HTML', value: '90', style: '200ms'},
        {code: 'css', name: 'CSS', value: '84', style: '300ms'},
        {code: 'js', name: 'Javascript', value: '65', style: '400ms'}
    ]
    
    const data = skillsInfo.map(skill => {
        return `
        <div class="skill-wrapper wow zoomIn" style="animation-delay: ${skill.style}">
            <div class="header-barchart">
                <p>${skill.name}</p>
                <p>${skill.value}%</p>
            </div>
            <div class="skill-barchart">
                <div class="skills-percent ${skill.code}"></div>
            </div>
        </div>
        `
    }).join('')
    
    document.querySelector(".skills-content").innerHTML = data
}

export default barchart