export default function docs({
  params,
}: {
  params: {
    abhay: string[];
  };
}) {
  if (params.abhay?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.abhay[0]} and concept {params.abhay[1]}{" "}
      </h1>
    );
  } else if (params.abhay?.length === 1) {
    return <h1>Viewing docs for feature {params.abhay[0]} </h1>;
  }
  return <h1>Docs Home Page</h1>;
}
