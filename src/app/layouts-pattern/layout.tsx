export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (<div>
        <div>header</div>
        <div>{children}</div>
        <div>footer</div>
    </div>)

}