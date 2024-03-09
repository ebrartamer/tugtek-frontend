export interface Signin {
  email: string
  password: string
}

export interface Signup {
  username: string
  email: string
  password: string
}

interface Team {
  person_name: string
  role: string
  bio: string
  linkedin_profile: string
}

interface Whitepaper {
  link: string
}

interface Tokenomics {
  fund_name: string
  amount: number
  lock_time: string
}

export interface Funding {
  name: string
  funding_round: string
  funding_amount: number
}

export interface IProjectData {
  project_name: string
  project_details: string
  token_name: string
  token_price: number
  token_logo: string
  project_url: string
  social_media: {
    twitter: string
    telegram: string
    linkedin: string
  }
  ido_calendar: {
    startDate: string
    endDate: string
    calendar_title: string
    calendar_description: string
    raise: string
    registration_link: string
    platform: string
    lock_up: string
    location: string
  }
  team: Team[]
  whitepaper: Whitepaper[]
  tokenomics: Tokenomics[]
}

export interface IVentureData {
  name: string
  logo: string
  details: string
  social_media: {}
  funding_budget: {
    minimum_budget: number
    maximum_budget: number
  }
  funding_projects: Funding[]
}

export interface IAirdropData {
  airdrop_name: string
  airdrop_details: string
  airdrop_logo: string
  airdrop_url: string
}
