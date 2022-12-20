import React from 'react'
import Navbar from '../navbar/Navbar'
import CurrentAffairs from './CurrentAffairsArchive/CurrentAffairsArchives'
import CurrentAffairsTable from './CurrentAffairsTable.js/CurrentAffairsTable'
import Articles from '../currentAffairsArticle/Articles'

const Main = () => {
  return (
    <>
        <Navbar />
        <CurrentAffairs/>
        <CurrentAffairsTable/>
        {/* <Articles /> */}
    </>
  )
}

export default Main