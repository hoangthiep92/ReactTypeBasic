import CardPizza from '../sections/CardPizza'

const HomePage = () => {

    return (
        <div style={{
            height: 'calc(100vh - 309px)', padding: '4rem 4rem',
            overflowY: 'auto'
        }}
        >
            <div className='wrapper-card-item'>
                <CardPizza
                    title='Pizza Thit Bam'
                    description='Thit bam, sot ca chua'
                />
            </div>
        </div>
    )
}
export default HomePage;