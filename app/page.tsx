import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// OpenSeaのコレクションページURL（実際のURLに置き換えてください）
const OPENSEA_COLLECTION_URL = "https://opensea.io/collection/eto-daruma-2025-mi"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-800 to-blue-700 text-white">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-600">
            Eto-Daruma NFT Collection
          </h1>
          <p className="text-xl mb-8 text-cyan-200">
            Discover the fusion of Japanese Zodiac and Daruma dolls in digital art
          </p>
          <Link href={OPENSEA_COLLECTION_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            >
              Mint Your Eto-Daruma
            </Button>
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
              <CardContent className="p-0">
                <Image
                  src={`/eto-daruma-${i + 1}.gif`}
                  alt={`Eto-Daruma #${i + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-cyan-300">About Eto-Daruma</h2>
          <p className="text-lg mb-8 text-cyan-100">
            Eto-Daruma is a unique NFT collection that combines the 12 animals of the Japanese Zodiac (Eto) with the
            iconic Daruma doll. Each piece is a digital masterpiece, blending tradition with modern blockchain
            technology.
          </p>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4 text-cyan-300">Collection Features</h3>
          <ul className="list-disc inline-block text-left text-cyan-100">
            <li>12 unique designs based on the Japanese Zodiac</li>
            <li>Hand-crafted digital art</li>
            <li>Limited edition of 1000 pieces per design</li>
            <li>Stored on the Ethereum blockchain</li>
          </ul>
        </section>

        <section className="text-center">
          <Link href={OPENSEA_COLLECTION_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
            >
              Mint Now
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-indigo-900 py-6 px-4 md:px-6 lg:px-8 mt-16">
        <div className="container mx-auto text-center text-cyan-200">
          <p>&copy; 2025 Eto-Daruma NFT Collection. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

