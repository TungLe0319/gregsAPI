export class Job{

  /**
   * 
   * @param {string} company 
   * @param {string} jobTitle 
   * @param {number} hours 
   * @param {number} rate 
   * @param {string} description 
   */
  constructor(company,jobTitle,hours,rate,description) {
    this.company = company
    this.jobTitle = jobTitle
    this.hours = hours
    this.rate = rate
    this.description= description
  }


  get JobTemplate () {
    return `
    
    `
  }
}


