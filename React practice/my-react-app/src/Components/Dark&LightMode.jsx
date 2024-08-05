import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>React Dark Mode Example</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, assumenda. Deleniti, impedit quia veritatis quas unde, culpa modi corporis non repellat aliquam facere labore, nemo earum nobis minus soluta placeat voluptates voluptas incidunt sunt nostrum sint? Facere sequi eligendi pariatur odit commodi illo dolorem est, quam quis consequatur fugit, eos fugiat velit incidunt quae aperiam ullam, id quisquam eveniet impedit perferendis. Odit cupiditate expedita deserunt ea quos incidunt officia distinctio exercitationem modi esse? Impedit, aspernatur suscipit? Iste eveniet, iure rerum quo alias veniam hic doloribus est voluptas quos laboriosam corrupti nobis voluptates esse ullam illo ipsam perferendis, harum vel veritatis placeat labore eius? Neque eligendi voluptate tempora aperiam quos saepe aliquam ab quidem ea eaque incidunt voluptas, reprehenderit officiis placeat sint iure corrupti, consequuntur cumque sed nobis officia, nihil hic iste? Earum sequi iure ut voluptas maiores sapiente soluta, consequuntur explicabo reprehenderit porro recusandae dolorum praesentium voluptatem cumque quaerat facilis enim fugit. Commodi est eum vero odio id, ducimus esse praesentium harum, modi eaque maxime libero unde laborum nulla! Incidunt sapiente vitae autem vel, animi dolorem suscipit porro aut, hic veritatis fugiat! Inventore molestias, recusandae quis totam a minus numquam ratione nemo repellat explicabo voluptates alias reiciendis! Ducimus molestiae quas, unde nisi officia laborum quidem voluptatibus architecto, corporis, ratione aperiam obcaecati fuga? Illum cumque nesciunt eligendi quidem excepturi molestias ea nemo voluptate maiores ut sed, illo quos ipsum. Vero qui impedit dignissimos atque cupiditate consequuntur omnis, vitae explicabo error eum fuga veritatis vel sit consequatur illum. Quidem recusandae voluptate cupiditate aut vel mollitia quae modi consequuntur quas animi! Fugit ex porro nobis quo mollitia dolor culpa, commodi minus id facere. Iure natus ullam, saepe incidunt, nobis adipisci doloremque omnis veniam quos quasi est mollitia aliquam quae deserunt fugiat! Voluptate ipsam ducimus commodi dolore suscipit ipsum itaque ab aspernatur optio corporis?</p>
      </div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure cumque porro saepe aperiam maxime debitis, consectetur, in, recusandae molestias eligendi minima quae quia? Libero sint dignissimos, magni commodi optio quia in. Ex, eaque! Eaque, necessitatibus officia aperiam quos maiores non dolorem eius optio facilis libero! Quibusdam atque officiis autem at veritatis, labore nemo exercitationem ratione voluptatem quae, tempora culpa. Maxime tenetur fuga, quod quasi ipsum quis. Cupiditate eum aperiam dignissimos ducimus reiciendis incidunt natus distinctio quae deleniti, totam, maiores nihil non. Consectetur blanditiis amet architecto. Beatae, voluptates. Praesentium ipsam ex corporis voluptas itaque velit. Ut ex fugiat voluptatibus. Necessitatibus pariatur dolorum delectus eius, iusto at rem reprehenderit quae labore distinctio cum, quos beatae nihil ducimus sapiente aspernatur magni ipsa quibusdam? Maiores voluptates aspernatur nam iusto eius ullam cumque ut similique deleniti possimus. Magni unde, ea nulla ullam blanditiis nam exercitationem error non tempore, eligendi sed tenetur. Dolore atque alias, sint architecto voluptas nihil quae, id quo provident quis possimus fugit numquam rem aliquam non! Aspernatur autem sapiente quidem adipisci minus placeat minima maxime ad similique non. Rem minus harum iure illo quam modi reprehenderit illum quaerat velit qui! Odio, aliquam aperiam facere consequuntur corporis voluptas, consectetur modi vitae impedit esse dolore maxime doloribus officia ratione nihil quidem obcaecati accusantium vero sequi quia nam aut magni dolorum? Quibusdam, quia sint quam itaque non quis accusamus rem minima expedita repellendus dicta repudiandae atque in. Non animi nemo voluptate quas, alias officiis ipsa velit cumque voluptatibus nisi? Aliquid consequatur deleniti, commodi nobis similique laborum itaque? Sequi, architecto tempore nesciunt atque, rem modi itaque provident velit, minima accusantium molestias odio vero placeat repudiandae ut unde animi laborum quaerat aliquid cumque ullam earum id? Pariatur accusantium consequuntur eveniet repellat, veritatis voluptate quod, quidem, laudantium expedita maiores eum harum vitae soluta aliquid deserunt quia incidunt id iste beatae reiciendis minus temporibus qui. Distinctio veritatis tenetur consequatur suscipit numquam neque ad doloremque nihil expedita molestias saepe, repudiandae est velit laborum fuga odio! Voluptates exercitationem sit quam eum natus blanditiis dolor! At, blanditiis modi? Laudantium error voluptas, vitae nemo aut necessitatibus rerum eius eveniet? Doloremque officiis nobis, ab minima asperiores sed ullam repellat illum animi nam soluta ipsa eum, eaque amet, dolorem iste nisi rerum magnam porro error delectus. Omnis ipsam quae eum itaque similique a numquam recusandae magnam quasi incidunt? Eaque, deleniti. Labore accusamus officiis adipisci consequatur, magnam libero beatae, quae assumenda vitae illum harum nam illo dolorum praesentium nesciunt perspiciatis! Adipisci iure, maxime incidunt tenetur ab error beatae quidem impedit ducimus tempore optio, sequi illo quisquam dolores aliquid esse quaerat nisi, laudantium asperiores fuga quo ad odit minima. Quas autem quibusdam blanditiis ratione non libero ab maiores tempora. Eum nesciunt illum officia sunt esse sequi consequatur pariatur neque explicabo at doloremque quam, accusantium cupiditate a dignissimos. Voluptas laboriosam omnis consequuntur quia corporis voluptates, sequi illum exercitationem earum rerum deserunt hic temporibus ex at reprehenderit? Voluptates, sit assumenda adipisci, aliquid doloribus vitae neque quas consequatur dicta asperiores quod distinctio provident laboriosam perspiciatis recusandae iure ullam architecto harum quos illum eligendi minima quasi ipsa. Maiores autem aliquam nobis consequatur explicabo fugiat deserunt, veritatis accusamus placeat quis, error accusantium dolore praesentium vero, asperiores consectetur laborum at ipsam aspernatur nisi enim exercitationem harum hic! Velit quod repellat quasi, labore at modi eos doloremque nisi nemo voluptas facilis alias suscipit ducimus sint sit saepe id a libero deserunt. Error suscipit unde praesentium eligendi, assumenda, tempora atque consectetur iusto, quis omnis ab eos repellat. Accusantium est corporis quibusdam non, suscipit voluptates veritatis. Hic magnam placeat dolorum, iure enim ut omnis aperiam, neque tempore, ipsam architecto. Alias quam, doloremque porro earum voluptatem, pariatur totam deleniti odio ducimus et ea amet qui corporis eius dolorem. Perferendis sint laudantium, quidem minima fugit cumque vero suscipit ipsam exercitationem veritatis obcaecati necessitatibus adipisci illum hic officia saepe quaerat officiis eius alias! Hic blanditiis consequatur unde magnam repellendus molestias, ad cupiditate nisi eaque pariatur amet! A, rem possimus voluptatum dolore debitis quis obcaecati quod quaerat dolorum laudantium? Dolorem exercitationem necessitatibus maxime perferendis velit. Aspernatur quae pariatur corrupti assumenda. Id corporis itaque maxime, ullam quis laborum non sunt incidunt soluta optio eveniet, ipsum consequuntur odit. Obcaecati itaque earum necessitatibus laboriosam quaerat nobis minus tempora a eum sequi! Exercitationem repellendus aliquam fuga voluptate nostrum non odio aliquid, doloribus doloremque ad distinctio culpa voluptates! Amet excepturi esse, adipisci optio fuga possimus consequuntur molestiae repudiandae voluptates ad doloremque at tempore consectetur nulla. Nemo ducimus neque eaque laborum, quos alias perspiciatis explicabo in quod unde enim laboriosam repellendus cupiditate iusto recusandae consectetur atque, voluptas ipsam. Delectus error voluptas nesciunt autem. Voluptas laboriosam quos laudantium excepturi sequi sed sapiente aspernatur voluptatibus? Voluptates et voluptate quae laudantium, officia tempore repellat quisquam ipsa in nostrum, necessitatibus nam aliquam? Repellat, minus adipisci ut, nulla amet id aut obcaecati eaque dolore aspernatur animi soluta odio quam. At dolor aspernatur nobis sapiente quod quidem qui exercitationem, ullam beatae adipisci dignissimos nulla totam ab est sint, illo voluptas iste. Magni, doloremque alias! Maxime nisi distinctio illum! Nulla laudantium est quasi, a, assumenda reiciendis facere laboriosam accusamus, qui vero nisi. Laborum iusto excepturi magnam atque distinctio at esse, nemo architecto nobis aperiam cum quod sapiente perferendis ducimus veniam ea corrupti accusantium labore enim. Quam earum accusantium iure impedit excepturi explicabo inventore, dolor nostrum nobis perferendis dolorum fugit possimus et? Expedita accusantium odit beatae perferendis ducimus reiciendis! Quasi, maiores. Voluptas ut ea ab ex, totam dolor vero. Reiciendis blanditiis debitis quidem pariatur reprehenderit, quisquam harum repellat magni. Sint eveniet, esse voluptatibus quam nostrum ut. Molestias numquam temporibus, iste officia similique eos rerum? Facere sunt rem eligendi quidem ducimus harum blanditiis. Reprehenderit hic quo ex provident officiis deleniti esse iusto, facere dolores culpa soluta excepturi mollitia, ducimus quasi exercitationem cupiditate voluptate at voluptas recusandae? Autem harum quisquam ratione iusto deserunt enim id porro eum quaerat itaque temporibus eius, ipsam tenetur nihil optio magni eos est adipisci tempora? Distinctio officia quos quaerat rem, velit illo, cumque eius cum voluptate voluptatem quam deserunt vitae quidem deleniti! Dicta vel excepturi tempora veniam consequuntur beatae deleniti.
      </div>
    </div>
  );
}

export default App;