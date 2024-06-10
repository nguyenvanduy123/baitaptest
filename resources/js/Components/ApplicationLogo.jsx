export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src="/public/image/logo-1.png"
            alt="Application Logo"
            style={{ maxWidth: '100%', height: 'auto' }}
        />
    );
}
