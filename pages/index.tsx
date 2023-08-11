import { Button } from '@/components/ui/button'
import { Inter } from 'next/font/google'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`max-w-5xl m-auto grid grid-cols-1 md:grid-cols-2 px-3  ${inter.className}`}
    >
      <div className='relative'>
        <div className='w-full md:w-80 block md:fixed top-1/2 md:-translate-y-1/2'>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>
                Button
              </Button>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ratione saepe quos ab, repellendus accusamus, fugit dignissimos nostrum possimus eius illo placeat explicabo rem molestias totam provident dolorum, asperiores minus itaque qui quia id aliquid. Harum nulla rerum, esse similique, facere soluta vel tempore animi, sapiente aliquid vitae saepe ea! Deserunt eos ipsam ex ab delectus veniam quibusdam perferendis facilis, ipsa labore sint dolores! Dignissimos impedit amet quis blanditiis, consequatur architecto tenetur repudiandae voluptas nobis magnam qui, itaque aliquam laborum aut error sapiente porro optio voluptatem necessitatibus dolore laboriosam et deserunt doloremque? Voluptatum veniam vitae corporis quod adipisci quam aliquam nostrum error tenetur doloremque ducimus mollitia ex incidunt ipsum eius cum aperiam, nihil laborum suscipit dolores quos quia sit. Nobis consectetur nihil voluptates commodi consequatur tenetur repellendus quidem minus soluta, inventore modi libero amet quas, rem ex a recusandae dolore veritatis voluptatum quisquam officia. Sit voluptatibus eveniet impedit ducimus ad dolorem numquam, dolor eligendi similique possimus nesciunt, amet rem cum magnam exercitationem debitis qui consequatur ipsam sunt placeat. Facere quod eligendi quaerat optio reprehenderit cum id cupiditate harum accusamus voluptatibus a, pariatur, necessitatibus tenetur architecto officia doloremque! Nemo, exercitationem omnis veritatis necessitatibus praesentium commodi laudantium tempore dignissimos in non? Quia molestias deleniti et veniam omnis! Impedit, maxime deserunt, assumenda voluptate culpa minima, voluptas ab praesentium odit consectetur accusamus. Voluptatem sequi officiis beatae! Enim ab nisi delectus esse expedita atque officia, tenetur maiores molestias ipsam perspiciatis, quisquam impedit ex aut nulla explicabo? Suscipit unde voluptate placeat perspiciatis libero, porro quam quis provident iusto eveniet alias saepe fuga dolorum ipsum cumque harum obcaecati doloribus eaque officiis. Sapiente quos eligendi fuga quo, ad facilis nisi quis laudantium non eius ab ipsam suscipit sint, quaerat similique totam repellat rerum aut ut cupiditate vel doloremque iure odit maxime. Modi perspiciatis eum autem repellendus non accusamus aperiam! Suscipit id neque delectus dolorum tempore et quisquam repellendus dignissimos porro, dolore error doloribus deleniti. Ab cupiditate, eaque dolorem eveniet ducimus facere praesentium odio expedita eos deleniti! Necessitatibus quam architecto ut reiciendis repellendus animi tempore reprehenderit pariatur iste fugit maxime eligendi consequuntur autem sapiente voluptas odio asperiores minus facilis quia dolorum dolorem omnis, totam assumenda. Et enim ad rerum maiores aliquam voluptatem aliquid sed nostrum quos aperiam ipsum possimus at mollitia delectus alias non quo corrupti, iure, iste doloremque. Sit dignissimos dolore eaque error temporibus atque eius ducimus reiciendis obcaecati, cumque asperiores quas ex quos omnis magnam sunt debitis pariatur necessitatibus praesentium? Soluta, quasi cum. A vitae quas ad temporibus quidem harum totam facilis pariatur accusantium quae nisi corrupti nesciunt nemo quis quam velit eaque recusandae praesentium, aspernatur assumenda quia. Neque quidem mollitia dolores iure rerum odit ab voluptas deleniti porro, tempore sed dolorem quis, cupiditate rem laudantium ut esse. Qui laudantium atque earum maiores dolores tempore hic perspiciatis modi autem, praesentium culpa nisi possimus, provident unde nesciunt et eius aut illum accusamus harum, veritatis rem eveniet. Mollitia aut officia earum cum distinctio quas placeat nam, a nostrum cupiditate voluptatum possimus ut. Debitis, recusandae error. Harum ullam itaque perferendis. Sint sit corrupti molestiae cumque blanditiis, voluptates animi soluta sequi facere beatae exercitationem debitis hic fuga obcaecati optio consequatur architecto minus tenetur quos autem sunt deserunt? Modi, labore. Dicta error natus alias nulla at nesciunt explicabo accusamus animi suscipit, maxime voluptatem impedit mollitia magni inventore adipisci commodi quibusdam nam iusto ipsam fugit pariatur ullam ex. Quia neque libero veniam. Ullam aspernatur fuga natus quod rerum delectus atque accusamus! Consequatur rerum odio nostrum quo architecto sint! Ea voluptate cupiditate quas dicta praesentium deserunt porro asperiores cumque doloremque pariatur nostrum, accusantium nobis aliquam delectus vel incidunt molestias minima eius optio explicabo animi odit amet, ad accusamus. Reprehenderit quia eos fugit doloremque ab consectetur magni cupiditate inventore aliquid dicta! Alias, cum nisi? Eos odit architecto adipisci voluptatem! Earum sit excepturi, laboriosam repudiandae sed soluta aut cupiditate suscipit et incidunt a, aspernatur optio porro illum dolore praesentium dolores odit! Ipsam delectus eveniet velit eaque. Expedita neque corporis vel, similique a sit sunt voluptas officiis, quo nobis nihil ad illo delectus, molestias beatae voluptatum nulla quis? Nobis ipsam, facere sequi, voluptas inventore consequatur quos quisquam quo, fugiat voluptatem voluptatibus nesciunt? Ipsum recusandae pariatur exercitationem ea quidem iure adipisci quia provident necessitatibus explicabo, nobis impedit corrupti.
      </div>
    </main>
  )
}
