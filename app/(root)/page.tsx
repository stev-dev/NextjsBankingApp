import HeaderBox from "@/app/components/ui/HeaderBox"
import TotalBalanceBox from "../components/ui/TotalBalanceBox"

const Home = ({accounts}:TotlaBalanceBoxProps) => {
  const loggedIn ={firstname: "Mostapha"}

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstname || 'Guest'}
          subtext="Access and manage your transactions"
          />

          <TotalBalanceBox
          accounts={accounts}
          totalBanks={2}
          totalCurrentBalance={8700}
          />
        </header>
      </div>
    </section>
  )
}

export default Home