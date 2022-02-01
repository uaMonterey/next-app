export type TAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}
export type TContact = {
    id: string,
    name: string,
    email: string,
    address: TAddress
}
export type TPost = {
    title: string,
    body: string
    map(element: ({id, title}: { id: any; title: any }) => JSX.Element): Boolean;
}
export type TSocial = {
    id: string,
    icon: string,
    path: string
    map(element: ({id, icon, path}: { id: any; icon: any; path: any }) => JSX.Element): Boolean;
}
