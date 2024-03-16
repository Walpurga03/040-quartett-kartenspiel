/**
 * Datenstruktur für die Spielkarten.
 * 
 * @field {string} backCard - Pfad zum Bild der Rückseite der Karte.
 * @field {number} id - Vortlaufende Identifikationsnummer für jede Karte.
 * @field {Object} established - Informationen über die Entstehungszeit des Objekts/Konzepts.
 * @field {number} established.year - Jahr der Entstehung (für Berechnungen).
 * @field {string} established.text - Beschreibung der Entstehungszeit.
 * @field {string} established.textE - Beschreibung in Englisch.
 * @field {string} established.textD - Beschreibung in Deutsch.
 * @field {number} scarcity - Knappheit des Objekts/Konzepts.
 * @field {number} durability - Haltbarkeit/Lebensdauer des Objekts/Konzepts.
 * @field {number} divisibility - Teilbarkeit des Objekts/Konzepts.
 * @field {number} transportability - Transportfähigkeit des Objekts/Konzepts.
 * @field {string} image - Pfad zum Bild, das das Objekt/Konzept darstellt.
 * @field {string} textE - Beschreibungstext in Englisch.
 * @field {string} textD - Beschreibungstext in Deutsch.
 */
const newCards = [
    {
      backCard: "./images/backsite/backCard_2.png",
      id: 1,
      property0: -2009,
      property1: "2009",
      property1E: "Since",
      property1D: "Seit",
      property2: 5,
      property2E: "Scarcity",
      property2D: "Knappheit",
      property3: 3,
      property3E: "Durability",
      property3D: "Lebensdauer",
      property4: 5,
      property4E: "Divisibility",
      property4D: "Teilbarkeit",
      property5: 5,
      property5E: "Transportability",
      property5D: "Transportfähigkeit",
      image: "./images/frontsite/bitcoin.png",
      textE: "Bitcoin is the first decentralized network that allows the transfer of value without a central authority. The immutable supply cap of 21 Million bitcoin makes it the scarcest money in the world. The protocol is open-source, based on a blockchain and peer-to-peer.",
      textD: "Bitcoin ist das erste dezentrale Netzwerk, das den Transfer von Werten ohne eine zentrale Autorität ermöglicht. Die unveränderliche Stückzahl von 21 Millionen Bitcoin macht es zum knappsten Geld der Welt. Das Protokoll ist quelloffen, basiert auf einer Blockchain und ist Peer-to-Peer.",
    },
    {
      backCard: "./images/backsite/backCard_2.png",
      id: 2,
      property0: -2015,
      property1: "2015",
      property1E: "Since",
      property1D: "Seit",
      property2: 2,
      property2E: "Scarcity",
      property2D: "Knappheit",
      property3: 2,
      property3E: "Durability",
      property3D: "Lebensdauer",
      property4: 5,
      property4E: "Divisibility",
      property4D: "Teilbarkeit",
      property5: 5,
      property5E: "Transportability",
      property5D: "Transportfähigkeit",
      image: "./images/frontsite/ethereum.png",
      textE: "Ethereum is an open-source, distributed system which allows the creation, management, and execution of programs or contracts (smart contracts) in its own blockchain. One unit in the Ethereum Network is called one ether. ",
      textD: "Ethereum ist ein quelloffenes, verteiltes System, das die Erstellung, Verwaltung und Ausführung von Programmen oder Verträgen (Smart Contracts) in seiner eigenen Blockchain ermöglicht. Eine Einheit im Ethereum-Netzwerk wird als ein Ether bezeichnet.",
    },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 3,
    //   property0: -2014,
    //   property1: "2014",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 2,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 5,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 5,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/monero.png",
    //   textE: "Monero is a decentralized cryptocurrency. It uses a public distributed ledger with privacy-enhancing technologies that obfuscate transactions to achieve anonymity and fungibility. However",
    //   textD: "Monero ist eine dezentralisierte Kryptowährung. Sie verwendet ein öffentliches verteiltes Hauptbuch mit Technologien zur Verbesserung der Privatsphäre, die Transaktionen verschleiern, um Anonymität und Fungibilität zu erreichen.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 4,
    //   property0: 6000,
    //   property1: "6000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 4,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 5,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 3,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 3,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/gold.png",
    //   textE: "Gold is a precious metal that has been used as a form of money for thousands of years. It is highly valued due to its rarity, beauty, and versatility, and it has played a significant role in the development of modern currency systems. It is resistant to corrosion and does not tarnish.",
    //   textD: "Gold ist ein Edelmetall, das seit Tausenden von Jahren als Geld verwendet wird. Es wird aufgrund seiner Seltenheit, Schönheit und Vielseitigkeit hoch geschätzt und hat bei der Entwicklung moderner Währungssysteme eine wichtige Rolle gespielt. Es ist zudem korrosionsbeständig und färbt nicht ab.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 5,
    //   property0: 5000,
    //   property1: "5000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 3,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 4,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 3,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 3,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/silver.png",
    //   textE: "Silver is a metal that has been used as a form of currency for centuries. It is less valuable than gold, but it is still highly prized due to its rarity and beauty. Silver has been used in the production of coins and other forms of currency in many societies throughout history.",
    //   textD: "Silber ist ein Metall, das schon seit Jahrtausenden als Zahlungsmittel verwendet wird. Es ist weniger wertvoll als Gold, wird aber aufgrund seiner Seltenheit und Schönheit dennoch sehr geschätzt. Silber wurde im Laufe der Geschichte in vielen Gesellschaften zur Herstellung von Münzen und anderen Zahlungsmitteln verwendet.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 6,
    //   property0: 8000,
    //   property1: "8000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 4,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 3,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/copper.png",
    //   textE: "Copper has been used as a form of money throughout history, dating back to ancient civilizations such as the Egyptians and Romans. Its durability and scarcity made it a valuable material for coins and other forms of currency. Today, copper is primarily used in industrial applications.",
    //   textD: "Kupfer wurde im Laufe der Geschichte immer wieder als Zahlungsmittel verwendet, bereits von alten Zivilisationen wie den Ägyptern und Römern. Seine Langlebigkeit und Knappheit machten es zu einem wertvollen Material für Münzen und andere Zahlungsmittel. Heutzutage findet Kupfer vor allem in der Industrie Verwendung",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 7,
    //   property0: -2002,
    //   property1: "2002",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 1,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 2,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 4,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 4,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/euro.png",
    //   textE: "The euro is the official currency of the European Union. It is used by 19 of the 27 member states of the EU, as well as by several non-member countries. It’s abbreviated as EUR and is represented by the symbol €. Furthermore, it is the second most traded currency in the world.",
    //   textD: "Der Euro ist die offizielle Währung der Europäischen Union. Er wird von 19 der 27 EU-Mitgliedstaaten sowie von mehreren Nichtmitgliedstaaten verwendet. Er wird mit EUR abgekürzt und durch das Symbol € dargestellt. Zudem ist der Euro die am zweithäufigsten gehandelte Währung der Welt.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 8,
    //   property0: -1785,
    //   property1: "1785",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 1,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 3,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 4,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 4,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/us-dollar.png",
    //   textE: "The U.S. dollar (USD) is the official currency of the United States of America and is the world's primary reserve currency. The U.S. dollar is issued by the Federal Reserve, the central bank of the United States. ",
    //   textD: "Der US-Dollar (USD) ist die offizielle Währung der Vereinigten Staaten von Amerika und gilt als die wichtigste Reservewährung der Welt. Die Ausgabe des US-Dollars erfolgt durch die Federal Reserve, die Zentralbank der Vereinigten Staaten.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 9,
    //   property0: -700,
    //   property1: "700",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 1,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 4,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 4,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 4,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/pound.png",
    //   textE: "The British pound (GBP) is the official currency of the United Kingdom and nine of its associated territories. 1200 years old, the pound sterling is the oldest currency that is still in use today. It’s considered a reserve currency as it is widely used in international trade.",
    //   textD: "Das britische Pfund (GBP) ist die offizielle Währung des Vereinigten Königreichs und neun seiner angeschlossenen Territorien. Mit einem Alter von 1200 Jahren ist das Pfund Sterling die älteste Währung, die heute noch in Gebrauch ist. Das Pfund ist international anerkannt und spielt eine bedeutende Rolle im globalen Finanzwesen.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 10,
    //   property0: -1870,
    //   property1: "1870",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 1,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 3,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 4,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 4,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/yen.png",
    //   textE: "The Japanese yen (JPY, ¥), is the official currency of Japan and is issued by the Bank of Japan. It is the third most traded currency in the foreign exchange market, after the United States dollar and the euro.",
    //   textD: "Der japanische Yen (JPY, ¥) ist die offizielle Währung Japans und wird von der Bank von Japan ausgegeben. Er ist nach dem US-Dollar und dem Euro die am dritthäufigsten gehandelte Währung auf dem Devisenmarkt.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 11,
    //   property0: -1948,
    //   property1: "1948",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 1,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 2,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 4,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 4,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/renminbi.png",
    //   textE: "The Chinese renminbi (CNY, ¥), also known as the Chinese yuan, is the official currency of the People's Republic of China and is issued by the People's Bank of China, the country's central bank.",
    //   textD: "Der chinesische Renminbi (CNY, ¥), auch bekannt als chinesischer Yuan, ist die offizielle Währung der Volksrepublik China und wird von der People's Bank of China, der Zentralbank des Landes, ausgegeben.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 12,
    //   property0: 200,
    //   property1: "200 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 1,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 2,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 3,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/denarius.png",
    //   textE: "The denarius was an ancient Roman coin that was widely used throughout the Roman Empire. It was made of silver and was commonly used in trade and other financial transactions. It was an important currency in the ancient world and was widely accepted as a medium of exchange.",
    //   textD: "Der Denar war eine antike römische Münze, die im gesamten Römischen Reich weit verbreitet war. Er bestand aus Silber und wurde häufig im Handel und bei anderen finanziellen Transaktionen verwendet. Er war eine wichtige Währung in der antiken Welt und wurde weithin als Tauschmittel akzeptiert.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 13,
    //   property0: -1924,
    //   property1: "1924",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 1,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 1,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 3,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 3,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/reichsmark.png",
    //   textE: "The Reichsmark was legal tender in the German Reich from 1924 to 1948. It was issued by the Reichsbank, the central bank of Germany, and replaced the Papiermark, which had suffered significant depreciation during the early 1920s.",
    //   textD: "Die Reichsmark war von 1924 bis 1948 gesetzliches Zahlungsmittel im Deutschen Reich. Herausgegeben von der Reichsbank, der Zentralbank Deutschlands, ersetzte sie die Papiermark, die in den frühen 1920er Jahren erheblich an Wert verloren hatte.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 14,
    //   property0: 10000,
    //   property1: "10000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 2,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 3,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/saltBars.png",
    //   textE: "Salt bars, the so-called amoles, were used as means of payment in Ethiopia since ancient times. They were used as a good and at the same time they had monetary value. In some local marketplaces, they’re still in use today",
    //   textD: "Salzbarren, die sogenannten Amole, wurden in Äthiopien seit dem Altertum als Zahlungsmittel verwendet. Sie wurden als Ware verwendet und hatten gleichzeitig einen Geldwert. Auf einigen lokalen Märkten Afrikas und Äthiopiens sind sie noch heute in Gebrauch.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 15,
    //   property0: 2000,
    //   property1: "2000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 1,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 2,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/cowry.png",
    //   textE: "Cowry shells were used as currency in many parts of the world for their beauty and rarity, but were gradually replaced by standardized currency. Today, they are used for decoration and collecting.",
    //   textD: "Kaurimuscheln wurden in vielen Teilen der Welt wegen ihrer Schönheit und Seltenheit als Zahlungsmittel verwendet, wurden aber nach und nach durch standardisierte Währungen ersetzt. Heute werden sie zu Dekorations- und Sammelzwecken verwendet.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 16,
    //   property0: 3000,
    //   property1: "3000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 1,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 3,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/cacao.png",
    //   textE: "Cacao beans were widely used as a form of currency in ancient Mesoamerican civilizations such as the Maya and the Aztecs. Cacao beans were considered valuable due to their rarity and the difficulty of obtaining them, and they were often used in trade for other goods and services.",
    //   textD: "Kakaobohnen waren in den alten mesoamerikanischen Zivilisationen wie den Maya und den Azteken als Zahlungsmittel weit verbreitet. Kakaobohnen galten aufgrund ihrer Seltenheit und der Schwierigkeit, sie zu beschaffen, als wertvoll und wurden häufig im Tausch gegen andere Waren und Dienstleistungen verwendet.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 17,
    //   property0: -1619,
    //   property1: "1619",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 1,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 3,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/tobacco.png",
    //   textE: "Natural money made out of tobacco was an established medium of exchange in America, Africa, Indonesia, and Melanesia. Cigarette money will often appear when the current money is broken (e.g., hyperinflation during the Weimar Republic).",
    //   textD: "Natürliches Geld aus Tabak war in Amerika, Afrika, Indonesien und Melanesien ein gängiges Tauschmittel. Zigarettengeld entsteht oft in Zeiten, in denen traditionelle Währungen zusammenbrechen, wie es beispielsweise während der Hyperinflation in der Weimarer Republik der Fall war.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 18,
    //   property0: 10000,
    //   property1: "10000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 1,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 1,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/cattle.png",
    //   textE: "Natural money. “Pecunia” means money in Latin. Its origin “pecus” (cattle) points to its very long use as a measure for value. It was used to remunerate services, to pay debt, taxes, fines and as a battle or victory prize.",
    //   textD: "Natürliches Geld. “Pecunia” bedeutet auf Lateinisch Geld. Sein Ursprung “pecus” (Vieh) weist auf seine sehr lange Verwendung als Wertmaßstab hin. Es diente zur Entlohnung von Dienstleistungen, zur Begleichung von Schulden, Steuern, Bußgeldern und als Schlacht- oder Siegespreis.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 19,
    //   property0: -1500,
    //   property1: "1500 AD",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 2,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 2,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/glassBeads.png",
    //   textE: "Glass beads are small, decorative objects that are made from glass and are often used in jewelry or other decorative items. They have a long history and have been used for decorative and cultural purposes in many societies around the world. ",
    //   textD: "Glasperlen sind kleine, dekorative Objekte aus Glas, die häufig für Schmuck oder andere dekorative Gegenstände verwendet werden. Sie haben eine lange Geschichte und wurden in vielen Gesellschaften auf der ganzen Welt zu dekorativen und kulturellen Zwecken verwendet.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 20,
    //   property0: -1700,
    //   property1: "1700 AD",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 1,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 2,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/wampum.png",
    //   textE: "Wampum was a form of currency used by Native American tribes in North America made from shells. It was used for trade, commerce, and ceremonial purposes, and valued for its rarity and quality. It was eventually replaced by European currency but remains significant in Native American culture.",
    //   textD: "Wampum war eine von den Indianerstämmen Nordamerikas verwendete Währung, die aus Muscheln hergestellt wurde. Es diente dem Handel, Gewerbe und zeremoniellen Zwecken und wurde aufgrund seiner Seltenheit und Qualität geschätzt. Obwohl es schließlich durch die europäische Währung ersetzt wurde, behält es nach wie vor eine wichtige Bedeutung in der Kultur der amerikanischen Ureinwohner.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 21,
    //   property0: 10000,
    //   property1: "10000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 2,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 2,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/teeth.png",
    //   textE: "This form of money was made out of the teeth from mammals. The teeth were used in different parts of America, New Guinea, the Fiji Islands, the Solomon Islands, the Gilbert Islands and other islands of the South Pacific. Their rarity, or difficulty of obtaining them, made them suitable as money.",
    //   textD: "Diese Form des Geldes wurde aus den Zähnen von Säugetieren hergestellt und fand Verwendung in verschiedenen Teilen Amerikas, auf Neuguinea, den Fidschi-Inseln, den Salomon-Inseln, den Gilbert-Inseln und anderen Inseln des Südpazifiks .. Aufgrund ihrer Seltenheit bzw. der Schwierigkeit, sie zu beschaffen, waren sie als Zahlungsmittel geeignet.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 22,
    //   property0: 3000,
    //   property1: "3000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 2,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 1,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 3,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/grain.png",
    //   textE: "In ancient civilizations, grain was a valuable commodity due to its role as a staple food and its relatively stable value. It was typically stored in large granaries and used as a form of currency in trade. Grain could be traded for other goods and services, or it could be used to pay taxes or debts. ",
    //   textD: "In den alten Zivilisationen war Getreide aufgrund seiner Rolle als Grundnahrungsmittel und seines relativ stabilen Wertes eine wertvolle Ware. Es wurde üblicherweise in großen Getreidespeichern gelagert und diente im Handel als Zahlungsmittel. Getreide konnte gegen andere Waren und Dienstleistungen eingetauscht oder zur Begleichung von Steuern oder Schulden verwendet werden.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 23,
    //   property0: -1200,
    //   property1: "1200 AD",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 3,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 2,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 1,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 1,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/raiStones.png",
    //   textE: "Rai stones are large, circular stone disks that were used as a form of money on the island of Yap in the Pacific Ocean. They were made of a type of limestone found only on the island of Palau, which is located over 800 km away from Yap. The stones were quarried and carved into disks of various sizes.",
    //   textD: "Rai-Steine sind große, runde Steinscheiben, die auf der Insel Yap im Pazifischen Ozean als Zahlungsmittel verwendet wurden. Sie wurden aus einer Art von Kalkstein hergestellt, der nur auf der Insel Palau vorkommt, die über 800 km von Yap entfernt liegt. Die Steine wurden in Steinbrüchen abgebaut und zu Scheiben unterschiedlicher Größe gehauen.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 24,
    //   property0: 2000,
    //   property1: "2000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 3,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 2,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 2,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 2,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/aggryBeads.png",
    //   textE: "Aggry beads are a type of decorated glass bead from Ghana, used by West Africans as ornaments in necklaces, bracelets and other jewelry. Beads were used for exchange and as a means of payment during trade in Africa.",
    //   textD: "Aggry-Perlen sind eine Art verzierter Glasperlen aus Ghana, die von den Westafrikanern als Schmuck für Halsketten, Armbänder und andere Schmuckstücke verwendet wurden. Die Perlen wurden im afrikanischen Handel als Tausch- und Zahlungsmittel verwendet.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 25,
    //   property0: 2000,
    //   property1: "2000 BC",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 4,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 4,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 2,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 3,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/jewelry.png",
    //   textE: "In ancient civilizations, precious metals such as gold and silver were fashioned into decorative items such as rings, bracelets, and necklaces, which were then used to buy goods and services. Jewelry has various advantages as a form of money, including its subjective value, durability, and portability.",
    //   textD: "In den alten Zivilisationen wurden Edelmetalle wie Gold und Silber zu Schmuckstücken wie Ringen, Armbändern und Halsketten verarbeitet, die anschließend zum Erwerb von Waren und Dienstleistungen genutzt wurden. Schmuck hat als Geldform verschiedene Vorteile, darunter seinen subjektiven Wert, seine Langlebigkeit und seine Tragbarkeit.",
    // },
    // {
    //   backCard: "./images/backsite/backCard_2.png",
    //   id: 26,
    //   property0: -1252,
    //   property1: "1252",
    //   property1E: "Since",
    //   property1D: "Seit",
    //   property2: 4,
    //   property2E: "Scarcity",
    //   property2D: "Knappheit",
    //   property3: 5,
    //   property3E: "Durability",
    //   property3D: "Lebensdauer",
    //   property4: 3,
    //   property4E: "Divisibility",
    //   property4D: "Teilbarkeit",
    //   property5: 3,
    //   property5E: "Transportability",
    //   property5D: "Transportfähigkeit",
    //   image: "./images/frontsite/florin.png",
    //   textE: "The florin is a historical gold coin that was used in large parts of Europe. It was a highly prized coin due to its gold content. The coin was minted in the Middle Ages in Florence and weighed about 3.5 grams.",
    //   textD: "Der Florin ist eine historische Goldmünze, die in großen Teilen Europas verwendet wurde. Aufgrund ihres Goldgehalts war sie eine sehr geschätzte Münze. Die Münze wurde im Mittelalter in Florenz geprägt und wog etwa 3,5 Gramm.",
    // }
    ];
    export default newCards;
    