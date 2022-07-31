import AuthLayout from "../components/Layouts/AuthLayout";
import Transactions from "../components/Dashboard/Transactions";

const Test = () => {
    return (
    <AuthLayout>
    <section>
    <Transactions />
        <div>
            <h1 className="text-white">Test</h1>
        </div>
    </section>
    </AuthLayout>
    );
};

export default Test;