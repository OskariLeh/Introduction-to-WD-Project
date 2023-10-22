const textArea = document.getElementById("input-area")
const submitButton = document.getElementById("submit-data")
const populationCheckbox = document.getElementById("include-population")
populationCheckbox.checked = false
textArea.value = "Whole country"

let chartQuery = {
    "query": [
      {
        "code": "Vuosi",
        "selection": {
          "filter": "item",
          "values": [
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021"
          ]
        }
      },
      {
        "code": "Tulokymmenys",
        "selection": {
          "filter": "item",
          "values": [
            "10"
          ]
        }
      },
      {
        "code": "Kunta",
        "selection": {
          "filter": "item",
          "values": [
            "SSS"
          ]
        }
      },
      {
        "code": "Tiedot",
        "selection": {
          "filter": "item",
          "values": [
            "des_lkm"
          ]
        }
      }
    ],
    "response": {
      "format": "json-stat2"
    }
  }

let populationQuery = {
  "query": [
    {
      "code": "Vuosi",
      "selection": {
        "filter": "item",
        "values": [
          "1995",
          "1996",
          "1997",
          "1998",
          "1999",
          "2000",
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021"
        ]
      }
    },
    {
      "code": "Alue",
      "selection": {
        "filter": "item",
        "values": [
          "SSS"
        ]
      }
    },
    {
      "code": "Tiedot",
      "selection": {
        "filter": "item",
        "values": [
          "vaesto"
        ]
      }
    }
  ],
  "response": {
    "format": "json-stat2"
  }
}

submitButton.addEventListener("click", async () => {
    event.preventDefault()
    let areaCodes = await getAreaCodes()
    let areaCode = ""
    for (let i = 0; i < areaCodes.length; i++) {
        if (areaCodes[i].name.toLowerCase() == textArea.value.toLowerCase()) {
            areaCode = areaCodes[i].areaCode
            break
        }
    }

    chartQuery.query[2].selection.values[0] = areaCode
    populationQuery.query[1].selection.values[0] = areaCode
    
    makeChart()
})

const layerClicked = async (e) => {
  let areaCodes = await getAreaCodes()
  let areaCode = ""
  for (let i = 0; i < areaCodes.length; i++) {
      if (areaCodes[i].name.toLowerCase() == e.target.feature.properties.name.toLowerCase()) {
          areaCode = areaCodes[i].areaCode
          break
      }
  }
  textArea.value = e.target.feature.properties.name
  chartQuery.query[2].selection.values[0] = areaCode
  populationQuery.query[1].selection.values[0] = areaCode
  
  makeChart()
}

const getChartData = async () => {
    const url = "https://pxdata.stat.fi:443/PxWeb/api/v1/en/StatFin/tjt/statfin_tjt_pxt_12hh.px"

    const response = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(chartQuery)
    })

    if (!response.ok) {
        return
    }

    data = await response.json()

    return data
}

const getPopulationData = async () => {
  const url = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px"

    const response = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(populationQuery)
    })

    if (!response.ok) {
        return
    }

    data = await response.json()

    return data
}

const makeChart = async () => {
    const data = await getChartData()
    if (populationCheckbox.checked) {
      const populationData = await getPopulationData()
      const percentage = data.value
      const population = populationData.value
      const years = Object.values(data.dimension.Vuosi.category.label)

      console.log(population)
      const dataset = [
          {
              name: `Population in decile ${currentDecile}`,
              values: percentage
          }, 
          {
            name: "Total population",
            values: population
          }
      ]

      const chartData = {
          labels: years,
          datasets: dataset
      }

      const chart = new frappe.Chart("#chart", {
          title: `People belonging to income decile ${Object.keys(data.dimension.Tulokymmenys.category.label)} 
          in ${Object.values(data.dimension.Kunta.category.label)} from 1995-2021 and the total population`,
          data: chartData,
          type: "line",
          colors: ["#eb5146", "#115c9f"], 
          height: 450
      })
    } else {
      const percentage = data.value
      const years = Object.values(data.dimension.Vuosi.category.label)

    
      const dataset = [
          {
              name: `Population in decile ${currentDecile}`,
              values: percentage
          }
      ]
    
      const chartData = {
          labels: years,
          datasets: dataset
      }
    
      const chart = new frappe.Chart("#chart", {
          title: `People belonging to income decile ${Object.keys(data.dimension.Tulokymmenys.category.label)} 
          in ${Object.values(data.dimension.Kunta.category.label)} from 1995-2021`,
          data: chartData,
          type: "line",
          colors: ["#eb5146"],
          height: 450
      })
    }   
}

const getAreaCodes= async () => {
    const url = "https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px"

    const response = await fetch(url)

    if (!response.ok) {
        return
    }

    data = await response.json()

    let areaCodes = []
    const codes = data.variables[1].values
    const names = data.variables[1].valueTexts 

    codes.forEach((areaCode, index) => {
        areaCodes.push({
            areaCode: areaCode,
            name: names[index]
        })
    });
    
    return areaCodes
}

makeChart()