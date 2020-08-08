import React, { useEffect, useState } from 'react'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import categoriesRepository from '../../repositories/categories'
import PageDefault from '../../components/PageDefault'

function Home () {

  const [initialData, setInitialData] = useState([])

  // http://127.0.0.1:8080/categorias?_embed=videos

  useEffect(() => {
    categoriesRepository.getAllWithVideos().then((categoriesWithVideos) => {
      setInitialData(categoriesWithVideos)
    }).catch((err) => {
      console.log(err.message)
    })
  }, [])

  return (
    <PageDefault paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

      {
        initialData.map((category, index) => {
          if (index === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={initialData[0].videos[0].title}
                  url={initialData[0].videos[0].url}
                  videoDescription={'Vital Signs Written by Kiko Loureiro'}
                />
                <Carousel ignoreFirstVideo category={initialData[0]}/>
              </div>
            )
          }
          return (
            <Carousel key={category.id} category={category}/>
          )
        })
      }
    </PageDefault>
  )
}

export default Home
