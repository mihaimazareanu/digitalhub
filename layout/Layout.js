const { default: Header } = require("@/components/Header/Header")
const { PageContainer, MainContent } = require("./LayoutStyles")
const { default: Footer } = require("@/components/Footer/Footer")

const Layout = ({ children }) => {
    return (
        <PageContainer>
            <Header />
            <MainContent>{children}</MainContent>
            <Footer />
        </PageContainer>
    )
}

export default Layout;