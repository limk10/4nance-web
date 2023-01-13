import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

function Terms() {
  const term = `<h1>Ut ducimus natus non consequatur impedit cum suscipit excepturi. </h1><p>Lorem ipsum dolor sit amet. Eum delectus repellat a porro autemnon corrupti et distinctio porro in fugit magni. Eum voluptatem aperiam sit quia ipsaaut aliquid ut dolor cumque. </p><h2>Qui dolorem voluptate ad repudiandae reprehenderit. </h2><p>Id expedita labore <em>Et unde</em> et quia voluptatem ut facere recusandae? Non animi omnis a harum laboriosamsed nesciunt? Et architecto dolore <strong>Ad atque</strong> in magni dolore sed eaque voluptatem. </p><ul><li>Ea minus quos non necessitatibus ratione. </li><li>Et deleniti galisum et quaerat magni ut pariatur necessitatibus. </li><li>Vel sapiente pariatur sit laboriosam minus. </li><li>Id optio ipsam est animi totam qui dolore repellendus. </li><li>At odit omnis qui esse voluptas. </li><li>Quo corporis libero aut iusto beatae. </li></ul><h3>Aut minima dicta quo harum dolores. </h3><p>Id soluta illumEt maiores qui voluptatum eaque est consequatur libero. Sit accusamus similique qui consequuntur Quis <strong>Eos molestiae est dolorum ratione et obcaecati dolorem ex voluptates quos</strong>. </p>
  `;

  return (
    <>
      <SimpleGrid pt={10} px={5}>
        <div dangerouslySetInnerHTML={{ __html: term }} />
      </SimpleGrid>
    </>
  );
}

export default Terms;
