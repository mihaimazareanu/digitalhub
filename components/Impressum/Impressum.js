import Link from "next/link"
import { Address, GoldTextContainer, ContactContainer, LegalsContainer, NoMarginBottom } from "./ImpressumStyles"
import { NoHoverLink } from "../Footer/FooterStyles"

function Impressum() {
  return (
    <LegalsContainer>
        <h1>Impressum</h1>
        <Address>
            <p>Mihai Mazareanu</p>
            <p>Windloh 30A</p>
            <p>22589 Hamburg</p>
            <ContactContainer>
                <div>
                    <p>Tel.:</p>
                    <p>E-Mail:</p> 
                </div>
                <GoldTextContainer>           
                    <NoHoverLink href="tel:+491622490129"> +49 (0) 162 249 01 29</NoHoverLink>
                    <NoHoverLink href="mailto:mihai@digitalhub-hamburg.de" style={{marginTop: "0.3rem"}}>mihai@digitalhub-hamburg.de</NoHoverLink>
                </GoldTextContainer>
            </ContactContainer>
        </Address>
        {/* <NoMarginBottom>
            <p>Steuernummer:   folgt</p>
        	<p>Umsatzsteuer-ID: DEfolgt</p>
        </NoMarginBottom>
        <NoMarginBottom>
            <h2>Öffnungszeiten:</h2>
                <p>Dienstag - Freitag: 10:00 - 17:00</p>
                <p>Samstag: 12:00 - 16:00</p>
                <p>Montags, Sonn- und Feiertage: geschlossen</p>
        </NoMarginBottom> 
        <NoMarginBottom>
            <h2>Registereintrag</h2>
            <p>Eingetragen im Handelsregister</p>
            <p>Registergericht FOLGT</p>
            <p>Registernummer: HRB folgt</p>
        </NoMarginBottom>  */}      
        <p>Plattform der EU-Kommission zur Online-Streitbeilegung: <Link style={{color: "#2B2D42"}} href="https://ec.europa.eu/consumers/odr" target="_blank" >www.ec.europa.eu/consumers/odr</Link></p>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        <h2>Haftungsausschluss</h2>
        <h3>Haftung für Links</h3>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
        <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
        <h3>Haftung für Inhalte</h3>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
        <h2>Urheberrecht</h2>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
        <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
    </LegalsContainer>
  )
}

export default Impressum
